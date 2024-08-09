import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import AboutUs from './components/AboutUs'
import ProtoTypes from 'prop-types';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
export default class App extends Component {
  static defaultProps = {
    pageSize :6,
    country :"us",
    category: "science"
  }

  static protoTypes = {
    pageSize: ProtoTypes.number,
    country : ProtoTypes.string,
    category: ProtoTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode:false,
    }
  }
  toggleDarkMode = () =>{
    this.setState(prevState => ({
      isDarkMode :!prevState.isDarkMode,
    }))
  }
  render() {
    const {isDarkMode} = this.state;
    const themeClass = isDarkMode ? 'dark-mode' :'light-mode';
    return (
      <Router>
      <div className={`app ${themeClass}`}>
        <NavBar toggleMode={this.toggleDarkMode}/>
        <Routes>
        <Route path='/general' element={<News key="general" pageSize={6} country={"in"} category={"general"}/>} />
        <Route path='/business' element={<News key="business" pageSize={6} country={"in"} category={"business"}/>} />
        <Route path='/entertainment' element={<News key="entertainment" pageSize={6} country={"in"} category={"entertainment"}/>} />
        <Route path='/health' element={<News key="health" pageSize={6} country={"in"} category={"health"}/>} />
        <Route path='/science' element={<News key="science" pageSize={6} country={"in"} category={"science"}/>} />
        <Route path='/sports' element={<News key="sports" pageSize={6} country={"in"} category={"sports"}/>} />
        <Route path='/technology' element={<News key="technology" pageSize={6} country={"in"} category={"technology"}/>} />
        <Route path='/AboutUs' element={<AboutUs/>}/>
        </Routes>
  
      </div>
      </Router>
    )
  }
}
