import React, { Component, Fragment } from 'react';
import "./common/style/index.less";
import { HashRouter, Route,Switch,Redirect } from "react-router-dom";
import Admin from "./pages/admin/admin"
import Login from "./pages/login/login"
class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Switch>
            <Redirect exact from="/" to="/admin"></Redirect>
            <Route path="/admin" component={Admin} ></Route>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
