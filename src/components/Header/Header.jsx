import React from 'react';
import PropTypes from 'prop-types';

import NewTaskInput from '../NewTaskInput/NewTaskInput';

const Header = ({ onNewTask }) => (
  <header className="header">
    <h1>todos</h1>
    <NewTaskInput onNewTask={onNewTask} />
  </header>
);

Header.propTypes = {
  onNewTask: PropTypes.func.isRequired,
};

export default Header;
