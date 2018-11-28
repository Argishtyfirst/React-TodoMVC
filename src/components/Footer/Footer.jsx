import App from '../App/App';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Footer = ({activeTaskLength, clearCompleted}) => (
  <Router>
    <footer className="footer">
      <span className="todo-count"><strong>{activeTaskLength}</strong> item left</span>
      <ul className="filters">
        <li>
          <Link to="#/">All</Link>
        </li>
        <li>
          <Link to="#/active">Active</Link>
        </li>
        <li>
          <Link to="#/completed">Completed</Link>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => clearCompleted()}>Clear completed</button>
    </footer>
  </Router>
);

export default Footer;
