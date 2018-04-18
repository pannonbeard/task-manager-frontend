import React, { Component } from 'react';
import Tasks from './components/tasks/tasks'
import Layout from './containers/layout/layout'
import TaskForm from './components/tasks/taskform/taskform'

class App extends Component {
  state = {
    addTask: false,
  }

  switchToAddTask = () => {
    this.setState({ addTask: true })
  }

  switchToAllTasks = () => {
    this.setState({ addTask: false })
  }

  render() {
    let taskView = <Tasks />
    if( this.state.addTask ) {
      taskView = <TaskForm allTaskView={this.switchToAllTasks}/>
    }
    return (
      <div className="App">
        <Layout addTaskView={this.switchToAddTask} allTaskView={this.switchToAllTasks}>
          {taskView}
        </Layout>
      </div>
    );
  }
}

export default App;
