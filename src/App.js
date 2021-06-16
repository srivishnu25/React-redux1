
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch , Route ,Link} from 'react-router-dom';
import Contact from "./Contact/index";
import Home from "./Home/index";

const App = () => {
  return (
    <Router>
      <Link to="/">Home</Link><br/>
      <Link to="/contact">Contact</Link>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}/>

      </Switch>
    </Router>
    );
}
 
export default App;