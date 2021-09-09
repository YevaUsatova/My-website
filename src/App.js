import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import NewProjects from './components/NewProjects';
import useFetchedState from './hooks/useFetchedState';

function App() {
  const[ school, setSchool]= useFetchedState([], "http://localhost:3000/education")
  const [job, setJob]=useFetchedState([], "http://localhost:3000/work")
  //const[ data, setData]= useFetchedState(' ', "http://localhost:3000/about")
   
  return (
    <div className="App"> 
    <Router>
      <NavBar />
          <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path ="/about">
          <About  />
        </Route>
        <Route exact path="/projects">
          <Projects  />
        </Route>
        <Route path="/education">
          <Education school={school} setSchool={setSchool} />
        </Route>
        <Route path="/experience">
          <Experience job={job} setJob={setJob} />
        </Route>
        <Route exact path="/addproject">
          <NewProjects />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
