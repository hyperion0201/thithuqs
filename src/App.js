import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Clock from './components/Clock';
import Footer from './components/Footer';
import quest1 from './components/Q1';
import Main from './components/Main';

class App extends Component{
  render(){
    return(
      <div>
      <Sidebar/>
      <Header/>
      
     <Footer/>
      </div>
    );
  }
}

export default App;