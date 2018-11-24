import React from 'react';
import PropTypes from 'prop-types';

import Task from '../Task/Task';

const TodoList = ({ tasks }) => (
  <ul className="todo-list">
    {tasks.map(task => <Task key={task.id} title={task.title} completed={task.completed} />)}
  </ul>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};

export default TodoList;
