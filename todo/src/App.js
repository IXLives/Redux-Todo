import React from 'react';
import './App.css';
import InputForm from './components/InputForm'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <TodoList />
      <InputForm />
    </div>
  );
}

export default App;
