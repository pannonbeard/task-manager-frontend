import React, { Component } from 'react';
import Tasks from './components/tasks/tasks'
import Layout from './containers/layout/layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Tasks />
        </Layout>
      </div>
    );
  }
}

export default App;
