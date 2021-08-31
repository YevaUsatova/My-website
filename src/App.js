import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import fetchedData from './hooks/fetchedData';

function App() {
  fetchedData();
  return (
    <div className="App"> 
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home data ={fetchedData}/>
        </Route>
        <Route path ="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
