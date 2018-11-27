import React from 'react';
import Task from '../Task/Task';

const TodoList = ({ tasks, onDeleteTask, onCompleteTask }) => (
  <ul className="todo-list">
    {tasks.map(task => <Task key={task.id} taskId={task.id} title={task.title} 
      completed={task.completed} onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask}/>)}
  </ul>
);

export default TodoList;
