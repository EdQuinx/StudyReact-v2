import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
// components

import Spin from "components/Spinners/Spin";
import Navbar from "components/Navbars/AuthNavbar";

const ChatApp = (props) => {

	const history = useHistory()

	useEffect(() => {
		if (props.error) {
			props.resetError();
		}
		if (!props.loading && !props?.isAuthenticated)
		{
			history.push("/login")
		}
	}, [props])
	return (
		<>

        </>
	);
}

const mapStateToProps = state => {
	return {
		token: state.token,
		isAuthenticated: state.token !== null,
		loading: state.loading,
		error: state.error,
		change: state.change,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState()),
		logout: () => dispatch(actions.logout()),
		updateChange: () => dispatch(actions.updateChange()),
		resetError: () => dispatch(actions.errReset()),
		onAuth: (username, password) => dispatch(actions.authLogin(username, password)),
		authSignup: (fullname, username, email, password, gender, classs, goodAt = [], badAt = []) => dispatch(actions.authSignup(fullname, username, email, password, gender, classs, goodAt = [], badAt = [])),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp)