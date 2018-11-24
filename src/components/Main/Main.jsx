import React from 'react';
import PropTypes from 'prop-types';

import ToggleAll from '../ToggleAll/ToggleAll';
import TodoList from '../TodoList/TodoList';

const Main = ({ tasks }) => (
  <section className="main">
    <ToggleAll />
    <TodoList tasks={tasks} />
  </section>
);

Main.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Main;
