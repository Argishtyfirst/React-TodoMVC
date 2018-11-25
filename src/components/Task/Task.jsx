import React from 'react';

const Task = ({ title, completed, onDeleteTask, taskId }) => (
  <li>
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed} />
      <label>{title}</label>
      <button className="destroy" onClick={onDeleteTask(taskId)}/>
    </div>
    <input className="edit" title="Create a TodoMVC template" />
  </li>
);

export default Task;
