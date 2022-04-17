import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';


class App extends Component {

  state = {
    users: [
      {
        id: 1,
        name: "Aqil",
        salary: "1000",
        branch: "C# Developer"
      },
      {
        id: 2,
        name: "Huseyn",
        salary: "2000",
        branch: "React Developer"
      },
      {
        id: 3,
        name: "Ricat",
        salary: "3000",
        branch: "PHP Developer"
      },
    ]
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter(user=> id !== user.id)
    })
  }

  render() {
  return (
    <div className="App">
      <Navbar title="USER APP"/>
      <hr />
      <Users deleteUser = {this.deleteUser} users = {this.state.users}/>
      
    </div>
  );
  }
}

export default App;

