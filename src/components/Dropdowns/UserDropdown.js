import React, { useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";

import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

import * as api from 'api'
import axios from "axios";
import { useAppContext } from "state";
import { Link } from "react-router-dom";

const UserDropdown = (props) => {
	// dropdown props
	const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
	const btnDropdownRef = React.createRef();
	const popoverDropdownRef = React.createRef();
	const openDropdownPopover = () => {
		createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
			placement: "bottom-start",
		});
		setDropdownPopoverShow(true);
	};
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false);
	};

	const { uinfo, igroups, wgroups, notisocket } = useAppContext()

	const [userinfo, setUserinfo] = uinfo
	const [ingroups, setIngroups] = igroups
	const [wtgroups, setWtgroups] = wgroups
	const [socketnoti, setSocketnoti] = notisocket

	const handleGetUserInfo = () => {
		setUserinfo(null)
		axios.get(api.api_user_info, {
			params: {
				username: props.username,
				token: props.token
			}
		}).then(res => res.data)
			.then(res => {
				console.log("info user:", res)
				setUserinfo(res)
			})
	}

	useEffect(() => {
		if (props.token != null) {
			handleGetUserInfo()
		}
	}, []);

	return (
		<>
			<a
				className="text-blueGray-500 block"
				href="#pablo"
				ref={btnDropdownRef}
				onClick={(e) => {
					e.preventDefault();
					dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
				}}
			>
				<div className="items-center flex">
					<span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
						<img alt="..."
							className="w-full rounded-full align-middle border-none shadow-lg"
							src={userinfo?.avatar === "" ? require("assets/img/avatar.png").default : userinfo?.avatar}
						/>
					</span>
				</div>
			</a>
			<div

				ref={popoverDropdownRef}
				className={
					(dropdownPopoverShow ? "block " : "hidden ") +
					"absolute right-0 w-48 py-2 mt-2 bg-white bg-gray-100 bg-lightBlue-100 rounded-md shadow-xl"
				}
			>
				<Link
					to="/profile"
					className={
						"block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-blue-400 transform hover:text-white"
					}
				>
					Thông tin cá nhân
				</Link>
				<a
					href="#pablo"
					className={
						"block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-blue-400 transform hover:text-white"
					}
					onClick={(e) => e.preventDefault()}
				>
					Chỉnh sửa thông tin
				</a>
				<a
					href="#pablo"
					className={
						"block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-blue-400 transform hover:text-white"
					}
					onClick={(e) => e.preventDefault()}
				>
					Something else here
				</a>
				<div className="h-0 my-2 border border-solid border-blueGray-100"></div>
				<a
					href=""
					className={
						"block px-4 py-2 text-sm text-gray-300 text-gray-700 hover:bg-gray-400 transform hover:text-white"
					}
					onClick={() => props.logout()}
				>
					Đăng xuất
				</a>
			</div>
		</>
	);
};

const mapStateToProps = state => {
	return {
		token: state.token,
		isAuthenticated: state.token !== null,
		loading: state.loading,
		error: state.error,
		change: state.change,
		username: state.username,
		info: state.info,
		userId: state.userId,
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown)
