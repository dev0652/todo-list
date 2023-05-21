import React from 'react';
import './Todo.css';

const Todo = ({ text, completed, onToggle, onDelete }) => {
  return (
    <>
      <div className="todoList__left-side-wrapper">
        <input
          className="todoList__checkbox"
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />

        <p
          className="todoList__text"
          style={{
            textDecoration: `${completed ? 'line-through' : 'none'}`,
          }}
        >
          {text}
        </p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default Todo;
