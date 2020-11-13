import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

const App = () => {
  // const [data, setData] = useState([]);
  // useEffect( () => {
  //   axios({
  //     method: "GET",
  //     url: 'http://localhost:3200/'
  //   }).then(res => {
  //     setData(res.data)
  //   }) 
  // }, [setData])
  // console.log(data);
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
