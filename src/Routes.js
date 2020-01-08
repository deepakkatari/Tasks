import React from "react";
// import { Router, Route } from "react-router";

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './Home'
import ForgetPassword from './ForgetPassword'
import Register from './Register'
import Welcome from './welcome'

class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
          <Route>
          <Route path="/" component={Home} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/register" component={Register} />
          <Route path = '/welcome' component={Welcome} />
          </Route>
          {/* <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} /> */}
      </Router>
    );
  }
}

export default Routes;
