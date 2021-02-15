import React, { Component } from "react";
import ReactDOM from "react-dom";

import Nav from "./Nav";
import Form from "./Form";
import List from "./List";
import Edit from "./Edit";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
  return (
    <Router>
      <main>
        <Nav />
        <Switch>
          <Route path="/customer/index" exact component={List} />
          <Route path="/customer/form" component={Form} />
          <Route path="/customer/edit/:id" component={Edit} />
        </Switch>
      </main>
    </Router>
  );
}

export default Main;
ReactDOM.render(<Main />, document.getElementById("app"));
