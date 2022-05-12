import React, { Component } from 'react'
import NavBar from './components/layouts/NavBar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import './App.css';

class App extends Component{
  
  render(){
    return (

      <div className='App'>
        <NavBar title='Github Finder' icon='fab fa-github'/>
        <div className='container'><Users /></div>
      </div>
    );
  }
}

export default App;


