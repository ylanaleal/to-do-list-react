import { useState } from 'react';
import Todo from './components/Todo';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Todo />
    </>
  );
}

export default App;
