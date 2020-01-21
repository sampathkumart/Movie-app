import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";

import SignInPage from "./pages/signin-page/signin.component";
import RatingPage from "./pages/rating/rating.component";
import SignUpPage from "./pages/signup-page/signup.component";
import MoviesPage from "./pages/movies-page/movies.component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <main className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={SignInPage} />
            <Route path="/rating" component={RatingPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/movies" component={MoviesPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
