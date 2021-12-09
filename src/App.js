import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import * as actions from './store/actions/auth';
// layouts

import Admin from "layouts/Admin";

// views without layouts
import { AppWrapper } from './state';
import BaseRouter from "./route";
import Login from "views/auth/Login";
import Register from "views/auth/Register";
import ChatLayout from "layouts/Chat";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <AppWrapper>
        <Router>
          <Switch>
            <Route exact path="/login" render={() => (
              <Login {...this.props} />
            )} />
            <Route exact path="/register" render={() => (
              <Register {...this.props} />
            )} />
            <Route exact path="/chat" render={() => (
              <ChatLayout {...this.props} />
            )} />
            <Route path="*" render={() => (
              <Admin {...this.props}>
                <BaseRouter />
              </Admin>
            )} />
            {/* add redirect for first page */}
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.token,
    isAuthenticated: state.token !== null,
    loading: state.loading,
    error: state.error,
    change: state.change,
    info: state.info,
    username: state.username,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    logout: () => dispatch(actions.logout()),
    updateChange: () => dispatch(actions.updateChange()),
    onAuth: (username, password) => dispatch(actions.authLogin(username, password)),
    authSignup: (fullname, username, email, password, gender, classs, goodAt = [], badAt = []) => dispatch(actions.authSignup(fullname, username, email, password, gender, classs, goodAt = [], badAt = [])),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);