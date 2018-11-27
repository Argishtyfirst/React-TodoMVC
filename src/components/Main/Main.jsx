import React from 'react';

import ToggleAll from '../ToggleAll/ToggleAll';
import TodoList from '../TodoList/TodoList';

const Main = ({ tasks, onDeleteTask, onCompleteTask, toggleCompleteTasks }) => (
  <section className="main">
    <ToggleAll toggleCompleteTasks={toggleCompleteTasks}/>
    <TodoList tasks={tasks} onDeleteTask={onDeleteTask} onCompleteTask={onCompleteTask}/>
  </section>
);

export default Main;
