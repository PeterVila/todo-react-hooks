//TodoList
import React from 'react';

function TodoList({ todos, updateTodos }) {
  //First parameter lists all items on the list

  const removeTask = (index) => {
    const updatedList = todos.filter((task, taskIndex) => {
      return taskIndex !== index;
    });
    updateTodos(updatedList);
  }

  const markComplete = (id) => {
    const updatedList = todos.map((item, index) => {
      if (id !== index) return item;
      return { ...item, complete: !(item.complete) };
    });
    updateTodos(updatedList);
  }

  return (
    //JSX
    <div className="todo-list">
      {/* Component receives lists, map to iterate */}
      {todos.map((todo, index) => (
        <div key={index}>
        <div
          key={index}
          className={`todo ${todo.complete ? "taskDone" : ""}`}
          onClick={() => markComplete(index)}>
          Item {index + 1}: {todo.task}
        </div>
          <div className="button-row">
            <button className="button" onClick={() => removeTask(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
