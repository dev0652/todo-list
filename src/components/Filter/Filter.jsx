import React from 'react';
import './Filter.css';

export const Filter = ({ value, onChange }) => (
  <label className="label">
    Filter by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);
