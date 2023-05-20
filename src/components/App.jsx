import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './App.styled';

import todos from '../data/todoList';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor/TodoEditor';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    todos,
    filter: '',
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const {
      deleteTodo,
      addTodo,
      changeFilter,
      getVisibleTodos,
      state: { filter },
    } = this;

    return (
      <Container>
        <TodoEditor onSubmit={addTodo} />
        <Filter value={filter} onChange={changeFilter} />
        <TodoList
          todos={getVisibleTodos()}
          onDeleteTodo={deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
