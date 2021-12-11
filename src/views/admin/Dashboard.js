import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
// components

import CardLineChart from "components/Cards/CardLineChart.js";

import Spin from "components/Spinners/Spin";
import * as api from 'api'
import axios from "axios";
import CardStats from "components/Cards/CardStats";
import CardPointsChoose from "components/Cards/CardPointsChoose";
import CardLink from "components/Cards/CardLink";


const Dashboard = (props) => {
	const [dataResult, setDataResult] = useState([])
	const [currentSub, setCurrentSub] = useState(null)

	useEffect(() => {
		handleGetResultTest()
	}, [])

	useEffect(() => {
		if (dataResult.length > 0) {
			setCurrentSub(dataResult[0])
		}
	}, [dataResult])


	const handleGetResultTest = () => {
		setDataResult([])
		api.list_sub.map(val => {
			axios.get(api.api_history_result, {
				params: {
					username: props.username,
					token: props.token,
					subject: val
				}
			})
				.then(res => res.data)
				.then(res => {
					console.log("check res:", res)
					if (!Array.isArray(res)) return
					if (res.length > 0) {
						setDataResult(old => [...old, {
							"subject": val,
							"points": res.map(val => val.point).slice(-10)
						}])
					}
				})
				.catch(console.log)
		})
	}

	return (
		props.loading ?
			<Spin />
			:
			props.isAuthenticated ?
				<React.Fragment>
					<div className="relative mb-10">
						<div className="px-4 md:px-10 mx-auto w-full">
							<div>
								<div className="flex flex-wrap">
									<div className="w-full lg:w-6/12 xl:w-auto px-4">
										<CardPointsChoose
											statSubtitle="THỐNG KÊ ĐIỂM"
											statArrow="up"
											statPercent="3.48"
											statPercentColor="text-emerald-500"
											statDescripiron="Thống kê điểm từ bài thi hệ thống"
											statIconName="far fa-chart-bar"
											statIconColor="bg-red-500"
											subjects={dataResult}
											currentsubject={currentSub?.subject}
											action={setCurrentSub}
										/>
									</div>
									<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
										<CardLink
											statSubtitle="NHÓM HỌC CHUNG"
											statTitle="2,356"
											statArrow="down"
											statPercent="3.48"
											statPercentColor="text-red-500"
											statDescripiron="Tìm nhóm"
											statIconName="fas fa-comments"
											statIconColor="bg-orange-500"
											href="/chat"
										/>
									</div>
									<div className="w-full lg:w-6/12 xl:w-3/12 px-4">
										<CardLink
											statSubtitle="Thành viên"
											statTitle="924"
											statArrow="down"
											statPercent="1.10"
											statPercentColor="text-orange-500"
											statDescripiron="Tìm kiếm bạn bè ở thanh tìm kiếm"
											statIconName="fas fa-users"
											statIconColor="bg-pink-500"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap">
						{
							currentSub ?
								<div className="w-full mb-12" key={`point-line-${currentSub.subject}`}>
									<CardLineChart label={currentSub.subject} data={currentSub.points} number={1} />
								</div>
								: <></>
						}

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