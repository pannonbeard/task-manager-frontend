import React from "react"
import Task from './task/task'
import axios from '../../axios-tasks'
import styles from './tasks.css'

class Tasks extends React.Component{
  state = {
    tasks: []
  }
  
  componentDidMount(){
    this.getTasks()
  }

  getTasks = () => {
    axios.get('/api/v1/tasks.json')
      .then(response => this.setState({ tasks: response.data['tasks'] }))
      .catch(err => alert(err.message))
  }

  removeTaskHandler = (id) => {
    axios.delete('/api/v1/tasks/'+id, )
      .then( response => this.getTasks())
      .catch( err => alert(err.message))
  }

  render(){
    const { tasks } = this.state
    return(
      <div className={styles.Tasks}>
        { tasks.map( (task) => <Task key={task.id} {...task} remove={() => this.removeTaskHandler(task.id)}/> ) }
      </div>
    )
  }
}

export default Tasks