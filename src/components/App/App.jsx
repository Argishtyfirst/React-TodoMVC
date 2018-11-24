import React, { Component } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';

let nextId = 0;

const getId = () => {
  nextId += 1;
  return nextId;
};

class App extends Component {
  state = {
    tasks: [],
  };

  handleNewTask = (title) => {
    this.setState(({ tasks }) => ({
      tasks: [...tasks, { id: getId(), title, completed: false }],
    }));
  };

  render() {
    const { tasks } = this.state;

    return (
      <div>
        <section className="todoapp">
          <Header onNewTask={this.handleNewTask} />
          {tasks.length !== 0 && <Main tasks={tasks} />}
          {tasks.length !== 0 && <Footer />}
        </section>
        <Info />
      </div>
    );
  }
}

export default App;
