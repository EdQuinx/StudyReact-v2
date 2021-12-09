import React, { useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";

import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

import * as api from 'api'
import axios from "axios";
import { useAppContext } from "state";

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
        handleGetUserInfo()

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
					"bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
				}
			>
				<a
					href="#pablo"
					className={
						"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
					}
					onClick={(e) => e.preventDefault()}
				>
					Action
				</a>
				<a
					href="#pablo"
					className={
						"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
					}
					onClick={(e) => e.preventDefault()}
				>
					Another action
				</a>
				<a
					href="#pablo"
					className={
						"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
					}
					onClick={(e) => e.preventDefault()}
				>
					Something else here
				</a>
				<div className="h-0 my-2 border border-solid border-blueGray-100" />
				<a className={
						"text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
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
