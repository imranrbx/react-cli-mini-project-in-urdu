import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Addform from './components/Addform';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks:[]
    }
    this.addRecord = this.addRecord.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:4000/tasks')
      .then(res => res.json())
      .then(tasks => this.setState({tasks}))
      .catch(err => console.log(err));
  }
  addRecord(e){
    const tasks = [...this.state.tasks, e];
    this.setState({tasks})
  }
  render() {
    const tasks = this.state.tasks.map(task => <li className="list-group-item" key={task.id}>{task.title} - {task.isCompleted} - <button className="btn btn-primary">Edit</button></li>)
    return (
      <div className="App mt5">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
      
        <div className="container ">
          <div className="row">
            <div className="col-md-6 offset-md-3">
            <Addform addRec={this.addRecord} />
            <ul className="list-group">
              <li className="list-group-item active">Todo Tasks List</li>
              {tasks}
            </ul>
            </div>
          </div>
        </div>
        
   
        </div>
      </div>
    );
  }
}

export default App;
