import React from 'react';
import './Todo.css';

import IconButton from 'components/IconButton/IconButton';
import { ReactComponent as DeleteTodo } from '../../icons/delete.svg';

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

      {/* <button onClick={onDelete}>Delete</button> */}

      <IconButton onClick={onDelete}>
        <DeleteTodo width="24" height="24" fill="white" />
      </IconButton>
    </>
  );
};

export default Todo;
