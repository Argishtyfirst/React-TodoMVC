import React from 'react';
import Task from '../Task/Task';

const TodoList = ({ tasks, onDeleteTask }) => (
  <ul className="todo-list">
    {tasks.map(task => <Task key={task.id} taskID={task.id} title={task.title} 
      completed={task.completed} onDeleteTask={onDeleteTask}/>)}
  </ul>
);

export default TodoList;
