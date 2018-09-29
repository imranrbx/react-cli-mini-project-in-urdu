import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks:[]
    }
  }
  componentDidMount() {
    fetch('http://localhost:4000/tasks')
      .then(res => res.json())
      .then(tasks => this.setState({tasks}))
      .catch(err => console.log(err));
  }
  render() {
    const tasks = this.state.tasks.map(task => <li className="list-group-item" key={task.id}>{task.title} - {task.isCompleted} - <button className="btn btn-primary">Edit</button></li>)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
      
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
            <ul class="list-group">
              <li class="list-group-item active">Todo Tasks List</li>
              {tasks}
            </ul>
            </div>
          </div>
        </div>
        
   
        </p>
      </div>
    );
  }
}

export default App;
