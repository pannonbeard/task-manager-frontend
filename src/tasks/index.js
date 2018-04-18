import React from "react"
import Task from './task'
import axios from '../axios-tasks'

class Tasks extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
  }
  
  componentDidMount(){
    axios.get('/api/v1/tasks.json')
      .then(response => this.setState({ tasks: response.data['tasks'] }))
  }

  render(){
    const { tasks } = this.state
    return(
      <div>
        { tasks.map( (task, index) => <Task key={index} {...task} /> ) }
      </div>
    )
  }
}

export default Tasks