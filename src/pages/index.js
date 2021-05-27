import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Progetti from "./Progetti";
import Progetto from "./Progetto";

const index = () => {
  return (
    <Router>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            {" "}
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link'>
            {" "}
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/progetti' className='nav-link'>
            {" "}
            Progetti
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path='/about' exact component={About}></Route>
        <Route path='/' exact component={Home}></Route>
        <Route path='/progetti' exact component={Progetti}></Route>
        <Route path='/progetti/:param1' exact component={Progetto}></Route>
        <Route path='*' component={ErrorPage}></Route>
      </Switch>
    </Router>
  );
};

export default index;
