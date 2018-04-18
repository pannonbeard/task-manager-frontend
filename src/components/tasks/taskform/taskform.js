import React, { Component } from 'react'
import styles from './taskform.css'
import axios from '../../../axios-tasks'

class TaskForm extends Component {
  state = {
    title: '',
    description: '',
    priority: 0
  }

  handleFormChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const task = {
      ...this.state
    }
    axios.post('/api/v1/tasks.json', task)
      .then( response => this.props.allTaskView())
      .catch( err => console.log(err.message))
  }

  render() {
    return (
      <form onChange={this.handleFormChange} className={styles.TaskForm} onSubmit={this.handleFormSubmit}>
        <label>Title</label>
        <input type='text' name='title' value={this.state.title}/>
        <label>Description</label>
        <textarea name='description' value={this.state.description}></textarea>
        <label>Priority</label>
        <input type='number' name='priority' value={this.state.priority}/>
        <div className={styles.Button}>
          <button>Create new Task</button>
        </div>
      </form>
    )
  }
}

export default TaskForm