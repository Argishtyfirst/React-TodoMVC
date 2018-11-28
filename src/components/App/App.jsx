import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';

function getId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

class App extends Component {
  state = {
    tasks: localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [],
  };

  handleNewTask = (title) => {
    this.setState(({ tasks }) => ({
      tasks: [...tasks, { id: getId(), title, completed: false }],
    }));
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  };

  handleDeleteTask = (id) => {
    const newTasks = [...this.state.tasks];
    const task = newTasks.find(task => task.id === id);
    const index = newTasks.indexOf(task);
    newTasks.splice(index, 1);
    this.setState({tasks: newTasks});
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  handleCompleteTask = (id) => {
    const newTasks = this.state.tasks;
    const task = newTasks.find(task => task.id === id);
    const index = newTasks.indexOf(task);
    newTasks[index].completed = !task.completed;
    this.setState({tasks: newTasks});
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  handleActiveTasks = () => {
    const newTasks = this.state.tasks.filter(task => task.completed === false);
    this.setState({tasks: newTasks});
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  handleCompleteTasks = () => {
    const newTasks = this.state.tasks.filter(task => task.completed === true);
    this.setState({tasks: newTasks});
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  getActiveTasks = () => {
    return this.state.tasks.filter(task => task.completed === false);
  }

  toggleCompleteTasks = (checked) => {
    const newTasks = this.state.tasks;
    newTasks.forEach(task => checked ? task.completed = false : task.completed = true);
    this.setState({tasks: newTasks});
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  clearCompleted = () => {
    const newTasks = this.state.tasks.filter(task => task.completed === false);
    this.setState({tasks: newTasks});
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <section className="todoapp">
          <Header onNewTask={this.handleNewTask} />
          {tasks.length !== 0 && <Main tasks={tasks} onDeleteTask={this.handleDeleteTask}
            onCompleteTask={this.handleCompleteTask} toggleCompleteTasks={this.toggleCompleteTasks}/>}
          {tasks.length !== 0 && <Footer activeTaskLength={this.getActiveTasks().length} 
            onActiveTasks={this.handleActiveTasks} onCompleteTasks={this.handleCompleteTasks}
            clearCompleted={this.clearCompleted} />}
        </section>
        <Info />
      </div>
    );
  }
}

export default App;
