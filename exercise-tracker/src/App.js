import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.main.css";

import Navbar from "./components/navbar.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import ExerciseList from "./components/exercises-list.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Switch>
        <div className="container">
          <Navbar />
          <br />
          <Route exact path="/edit/:id" component={EditExercise} />
          <Route exact path="/create" component={CreateExercise} />
          <Route exact path="/user" component={CreateUser} />
          <Route exact path="/" component={ExerciseList} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
