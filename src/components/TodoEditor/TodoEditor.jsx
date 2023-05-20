import React, { Component } from 'react';
import './TodoEditor.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = event => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.message);
    this.reset();
  };

  reset = () => {
    this.setState({
      message: '',
    });
  };

  render() {
    const {
      state: { message },
      handleChange,
      handleSubmit,
    } = this;

    return (
      <form className="TodoEditor" onSubmit={handleSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Add new task
        </button>
      </form>
    );
  }
}
export default TodoEditor;
