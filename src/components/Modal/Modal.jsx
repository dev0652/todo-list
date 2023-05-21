import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

// #######################################

const modalRoot = document.querySelector('#modal-root');

// #######################################

export default class Modal extends Component {
  //
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = event => {
    if (event.code === 'Escape') {
      console.log('Escape pressed');

      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  // componentDidUpdate(prevProps, prevState) {}

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
