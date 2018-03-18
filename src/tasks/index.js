import React from "react"
import Task from './task'

const url = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:4000'
  : 'https://task-backend-staging.herokuapp.com/'
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
    console.log(process.env.NODE_ENV)
    const { tasks } = this.state
    return(
      <div>
        { tasks.map( (task, index) => <Task key={index} {...task} /> ) }
      </div>
    )
  }
}

export default Tasks