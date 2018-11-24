import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewTaskInput extends Component {
  static propTypes = {
    onNewTask: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = (event) => {
    this.setState({
      value: event.currentTarget.value.trim(),
    });
  };

  handleKeyDown = (event) => {
    const { onNewTask } = this.props;
    const { value } = this.state;

    if (value && event.key === 'Enter') {
      onNewTask(value);
      this.setState({
        value: '',
      });
    }
  }

  render() {
    const { value } = this.state;

    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={this.handleChange}
        value={value}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default NewTaskInput;
