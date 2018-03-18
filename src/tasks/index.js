import React from "react"
import Task from './task'

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
    fetch('http://localhost:4000/api/v1/tasks.json')
      .then( (response) => response.json() )
      .then( (data) => this.setState({ tasks: data['tasks'] }) )
  }

  render(){
    const { tasks } = this.state
    return(
      <div style={styles}>
        { tasks.map( (task, index) => <Task key={index} {...task} /> ) }
      </div>
    )
  }
}

const styles = {
  backgroundColor: 'gray'
}

export default Tasks