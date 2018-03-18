import React from "react"
import Task from './task'

const url = process.env.NODE_ENV === 'production' 
  ? 'https://task-backend-staging.herokuapp.com/'
  : 'http://localhost:4000'
class Tasks extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
  }
  componentWillMount(){
    this.getTasks()
  }

  getTasks() {
    fetch(url + '/api/v1/tasks.json')
      .then( (response) => response.json() )
      .then( (data) => this.setState({ tasks: data['tasks'] }) )
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