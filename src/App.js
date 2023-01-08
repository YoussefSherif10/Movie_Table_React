import './App.css';
import Table from "./components/table";
import Navbar from "./components/navbar";
import React from "react";
import {Route , Switch, Redirect} from 'react-router-dom'
import Customer from "./components/customer";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App() {
  return (
      <React.Fragment>
        <Navbar />
          <main role="main" className="container">

              <div className="starter-template">
                  <Switch>
                      <Route path="/login" component={LoginForm} />
                      <Route path="/register" component={RegisterForm} />
                      <Route path="/movies/:id" component={MovieForm} />
                      <Route path="/movies" component={Table} />
                      <Route path="/customers" component={Customer} />
                      <Route path="/rentals" component={Rental} />
                      <Route path="/not-found" component={NotFound} />
                      <Redirect from="/" exact to="/movies" />
                      <Redirect to="/not-found" />
                  </Switch>
              </div>

          </main>
      </React.Fragment>
  );
}

export default App;
