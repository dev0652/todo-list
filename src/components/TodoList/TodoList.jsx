import React from 'react';
import './TodoList.css';
import Todo from 'components/Todo/Todo';
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
            <Todo
              text={text}
              completed={completed}
              onToggle={() => onToggleCompleted(id)}
              onDelete={() => onDeleteTodo(id)}
            ></Todo>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
