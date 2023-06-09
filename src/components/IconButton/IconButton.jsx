import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

// ###############################

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" className="IconButton" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

export default IconButton;

// ###############################

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

// ###############################

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
