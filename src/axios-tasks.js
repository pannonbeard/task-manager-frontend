import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:4000' 
    : 'https://task-backend-staging.herokuapp.com'
})

export default instance