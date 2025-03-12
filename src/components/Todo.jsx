import { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([]); //listas
  const [headingInput, setHeadingInput] = useState(''); //titulo
  const [listInputs, setListInputs] = useState({}); //itens da lista

  const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
      setTodos([...todos, { heading: headingInput, listInputs: [] }]);
      setHeadingInput('');
    }
  };

  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== '') {
      const newTodos = [...todos];
      newTodos[index].listInputs.push(listInputs[index]);
      setTodos(newTodos);
      setListInputs({ ...listInputs, [index]: '' });
    }
  };

  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My To do List 📝</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter your task"
            value={headingInput}
            onChange={(e) => {
              setHeadingInput(e.target.value); //setando os dados do titulo da lista no state
            }}
          ></input>
          <button className="add-list-button" onClick={handleAddTodo}>
            Add
          </button>
        </div>
        <div className="todo_main">
          {todos.map((todo, index) => (
            <div key={index} className="todo-card">
              <div className="heading_todo">
                <h3>{todo.heading}</h3>
                <button className="delete-button-heading">
                  <i className="fa-solid fa-circle-xmark"></i>
                  Delete
                </button>
              </div>

              <div className="add_list">
                <input
                  type="text"
                  className="list-input"
                  placeholder="Add item"
                  value={listInputs[index] || ''}
                  onChange={(e) => handleListInputChange(index, e.target.value)}
                />
                <button
                  className="add-list-button"
                  onClick={() => handleAddList(index)}
                >
                  Add Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
