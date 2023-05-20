import React from 'react';
import './TodoList.css';
// import classNames from 'classnames';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  const todosCount = todos.length;
  const completedTodosCount = todos.reduce(
    (prev, { completed }) => (completed ? prev + 1 : prev),
    0
  );

  return (
    <>
      <p className="todoList__stat">Total tasks: {todosCount}</p>
      <p className="todoList__stat">Completed tasks: {completedTodosCount}</p>

      <ul className="todoList">
        {todos.map(({ id, text, completed }) => (
          <li key={id} className="todoList__item">
            <div className="todoList__left-side-wrapper">
              <input
                className="todoList__checkbox"
                type="checkbox"
                checked={completed}
                onChange={() => onToggleCompleted(id)}
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
            <button
              onClick={() => {
                onDeleteTodo(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
