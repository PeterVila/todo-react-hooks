//TodoForm.js
import React, { useState } from 'react';

/* addTodo parameter is a function, to be received
during the component declaration */
function TodoForm({ addTodo }) {
  //Receives the input from our form
  const [userInput, setUserInput] = useState("");

  const handleSubmit = e => {
    //don't forget since default behavior is to reload
    e.preventDefault();
    if (!userInput) return;
    addTodo({ complete: false, task: userInput, });
    setUserInput("");
  };

  return (
    //Form takes two properties, onSubmit to manipulate user data, 2nd is css
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="New Task"
        type="text"
        className="input"
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
      />
    </form>
  );
};
export default TodoForm;
