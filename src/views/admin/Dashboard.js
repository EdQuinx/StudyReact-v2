import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import Spin from "components/Spinners/Spin";



const Dashboard = (props) => {
  return (
    props.loading ?
    <Spin />
    :
    props.isAuthenticated ?
      <React.Fragment>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
      </React.Fragment>
        :
        props.history.push('/')
  );
}

const mapStateToProps = state => {
  return {
      token: state.token,
      userId: state.userId,
      isAuthenticated: state.token !== null,
      loading: state.loading,
      error: state.error,
      change: state.change,
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
      updateInfo: (token, username, userId) => dispatch(actions.getInfostatus(token, username, userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)