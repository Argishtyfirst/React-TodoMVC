import React from 'react';

import NewTaskInput from '../NewTaskInput/NewTaskInput';

const Header = ({ onNewTask }) => (
  <header className="header">
    <h1>todos</h1>
    <NewTaskInput onNewTask={onNewTask} />
  </header>
);

export default Header;
