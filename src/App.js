import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";
import AddReview from './components/AddReview';
import useFetchedState from './hooks/useFetchedState';


function App() {
  const[ school, setSchool]= useFetchedState([], "http://localhost:3000/education")
  const [job, setJob]=useFetchedState([], "http://localhost:3000/work")
  const[ review, setReview]= useFetchedState([], "http://localhost:3000/reviews")

  
  function addnewReview (reviewName){
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {"Content-Type": "Application/json", "Accepts": "Application/json" },
      body: JSON.stringify(reviewName)
  })
    .then((r)=>r.json())
    .then((data)=>setReview([...review, data]))
     
  }

  function deleteReview (id){
    const deletedR= review.filter((rev)=> rev.id !==id)
    setReview(deletedR)
  }
    
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
        <Route exact path="/reviews">
          <Reviews review={review} setReview={setReview} deleteFun={deleteReview} />
        </Route>
        <Route path="/education">
          <Education school={school} setSchool={setSchool} />
        </Route>
        <Route path="/experience">
          <Experience job={job} setJob={setJob} />
        </Route>
        <Route exact path="/addreview">
          <AddReview  addnewReview={addnewReview } />
        </Route>
         </Switch>
    </Router>
    </div>
  );
}

export default App;
