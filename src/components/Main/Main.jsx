import React from 'react';

import ToggleAll from '../ToggleAll/ToggleAll';
import TodoList from '../TodoList/TodoList';

const Main = ({ tasks, onDeleteTask }) => (
  <section className="main">
    <ToggleAll />
    <TodoList tasks={tasks} onDeleteTask={onDeleteTask}/>
  </section>
);

export default Main;
