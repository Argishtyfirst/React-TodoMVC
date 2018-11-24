import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ title, completed }) => (
  <li>
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed} />
      <label>{title}</label>
      <button className="destroy" />
    </div>
    <input className="edit" title="Create a TodoMVC template" />
  </li>
);

Task.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Task;
