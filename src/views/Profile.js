import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import axios from "axios";
import * as api from "../api"
import * as actions from "../store/actions/auth"
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useAppContext } from '../state';
import Spin from 'components/Spinners/Spin';
import Login from "./auth/Login"

const Profile = (props) => {

	const { uinfo } = useAppContext()
	const [userinfo, setUserinfo] = uinfo

	const [gudbad, setGudbad] = useState(true)
	const [showaddSub, setShowaddSub] = useState(false)
	//const [addsubForm] = Form.useForm()


	const handleGetUserInfo = () => {
		axios.get(api.api_user_info, {
			params: {
				username: props.username,
				token: props.token
			}
		}).then(res => res.data)
			.then(res => {
				console.log("check pro5", res)
				setUserinfo(res)
			})
			.catch(console.log)
	}
	useEffect(() => {
		if (props.token != null) {
			handleGetUserInfo()
		}
	}, [props])

	const handleAddSubject = (e) => {
		let requestAddSub = api.api_user_add_gudsub
		let dataPatch = {
			goodAt: userinfo?.goodAt,
			username: props.username
		}
		if (userinfo?.goodAt.includes(e.subject) || userinfo?.badAt.includes(e.subject)) {
			//message.error("Môn này đã được thêm.")
			return
		}
		if (e.gudorbad === "good") {
			requestAddSub = api.api_user_add_gudsub
			var goodAtArr = userinfo?.goodAt
			goodAtArr.push(e.subject)
			dataPatch = {
				goodAt: goodAtArr,
				username: props.username
			}
		} else {
			requestAddSub = api.api_user_add_badsub
			var badAtArr = userinfo?.badAt
			badAtArr.push(e.subject)
			dataPatch = {
				badAt: badAtArr,
				username: props.username
			}
		}
		axios.patch(requestAddSub, dataPatch, {
			params: {
				username: props.username,
				token: props.token
			}
		}).then(res => res.data)
			.then(res => {
				//message.success("Thêm môn học thành công")
				setShowaddSub(false)
				if (e.gudorbad === "good") {
					setGudbad(true)
				} else {
					setGudbad(false)
				}
			})
			.catch(err => {
				//message.error("Thêm môn học thất bại")
				setShowaddSub(false)
			})

	}

	const handleDelSubject = (item, gudorbad) => {
		let requestAddSub = api.api_user_add_gudsub
		let dataPatch = {
			goodAt: userinfo?.goodAt,
			username: props.username
		}
		if (gudorbad) {
			requestAddSub = api.api_user_add_gudsub
			var data = userinfo?.goodAt
			data = data.filter(function (v) {
				return v !== item;
			});
			dataPatch = {
				goodAt: data,
				username: props.username
			}
		} else {
			requestAddSub = api.api_user_add_badsub
			var data = userinfo?.badAt
			data = data.filter(function (v) {
				return v !== item;
			});
			dataPatch = {
				badAt: data,
				username: props.username
			}
		}
		axios.patch(requestAddSub, dataPatch, {
			params: {
				username: props.username,
				token: props.token
			}
		}).then(res => res.data)
			.then(res => {
				//message.success("Xoá môn học thành công")
				handleGetUserInfo()
			})
			.catch(err => {
				//message.error("Xoá môn học thất bại")
			})
	}

	return (
		<React.Fragment>
			{
				props.loading ?
					<Spin />
					:
					props.isAuthenticated ?
						<React.Fragment>
							<Navbar transparent />
							<main className="profile-page">
								<section className="relative block h-500-px">
									<div
										className="absolute top-0 w-full h-full bg-center bg-cover"
										style={{
											backgroundImage:
												"url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
										}}
									>
										<span
											id="blackOverlay"
											className="w-full h-full absolute opacity-50 bg-black"
										></span>
									</div>
									<div
										className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
										style={{ transform: "translateZ(0)" }}
									>
										<svg
											className="absolute bottom-0 overflow-hidden"
											xmlns="http://www.w3.org/2000/svg"
											preserveAspectRatio="none"
											version="1.1"
											viewBox="0 0 2560 100"
											x="0"
											y="0"
										>
											<polygon
												className="text-blueGray-200 fill-current"
												points="2560 0 2560 100 0 100"
											></polygon>
										</svg>
									</div>
								</section>
								<section className="relative py-16 bg-blueGray-200">
									<div className="container mx-auto px-4">
										<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
											<div className="px-6">
												<div className="flex flex-wrap justify-center">
													<div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
														<div className="relative">
															<img
																alt="avatar"
																src={userinfo?.avatar === "" ? require("assets/img/avatar.png").default : userinfo?.avatar}
																className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
															/>
														</div>
													</div>
													<div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
														<div className="py-6 px-3 mt-32 sm:mt-0">
															<button
																className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
																type="button"
															>
																Connect
															</button>
														</div>
													</div>
													<div className="w-full lg:w-4/12 px-4 lg:order-1">
														<div className="flex justify-center py-4 lg:pt-4 pt-8">
															<div className="mr-4 p-3 text-center">
																<span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
																	22
																</span>
																<span className="text-sm text-blueGray-400">
																	Số nhóm tham gia
																</span>
															</div>
															<div className="mr-4 p-3 text-center">
																<span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
																	10
																</span>
																<span className="text-sm text-blueGray-400">
																	Điểm mới nhất
																</span>
															</div>
															<div className="lg:mr-4 p-3 text-center">
																<span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
																	8
																</span>
																<span className="text-sm text-blueGray-400">
																	Xếp hạng
																</span>
															</div>
														</div>
													</div>
												</div>
												<div className="text-center mt-12">
													<h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
														{userinfo?.fullname}
													</h3>
													<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
														<i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
														Los Angeles, California
													</div>
													<div className="mb-2 text-blueGray-600 mt-10">
														<i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
														Solution Manager - Creative Tim Officer
													</div>
													<div className="mb-2 text-blueGray-600">
														<i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
														University of Computer Science
													</div>
												</div>
												<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
													<div className="flex flex-wrap justify-center">
														<div className="w-full lg:w-9/12 px-4">
															<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
																An artist of considerable range, Jenna the name taken by
																Melbourne-raised, Brooklyn-based Nick Murphy writes,
																performs and records all of his own music, giving it a
																warm, intimate feel with a solid groove structure. An
																artist of considerable range.
															</p>
															<a
																href="#pablo"
																className="font-normal text-lightBlue-500"
																onClick={(e) => e.preventDefault()}
															>
																Show more
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</main>
							{props.children}
							<Footer />
						</React.Fragment>
						:
						<Login />

			}
		</React.Fragment>
	);
}

const mapStateToProps = state => {
	return {
		token: state.token,
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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)