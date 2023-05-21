import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './App.styled';

// ###### Todos

import todos from '../data/todoList';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor/TodoEditor';
import { Filter } from './Filter/Filter';

// ###### Modal

import Modal from './Modal/Modal';

// ###### Icon buttons

import IconButton from './IconButton/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';

// #########################################

class App extends Component {
  state = {
    todos,
    filter: '',
    showModal: false,
  };

  // ###### Todos

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

    // Close modal after adding a new todo:
    // this.toggleModal();

    // !!! See alternative solution under componentDidUpdate
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

  // ###### Modal

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // ###### Lifecycle

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    // Close modal after adding a new todo
    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  // ###### render

  render() {
    const {
      deleteTodo,
      addTodo,
      changeFilter,
      getVisibleTodos,
      toggleModal,
      state: { filter, showModal },
    } = this;

    return (
      <Container>
        <IconButton onClick={toggleModal}>
          <AddIcon width="20" height="20" fill="white" />
        </IconButton>

        {showModal && (
          <Modal onClose={toggleModal}>
            <TodoEditor onSubmit={addTodo} />
          </Modal>
        )}

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
