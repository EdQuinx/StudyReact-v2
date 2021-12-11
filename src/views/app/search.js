import React, { useEffect, useState } from "react";


import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
import * as api from 'api'

// components
import TableNormal from "components/Table/TableNormal";
import axios from "axios";

function Search(props) {
    const history = useHistory()
    const queries = useLocation().search;

    const [dataSearch, setDataSearch] = useState([])

    useEffect(() => {
        if (props.error) {
            props.resetError();
        }
        if (!props.loading && !props?.isAuthenticated) {
            history.push("/login")
        }
    }, [props])

    useEffect(() => {
        handleSearchFromQuery(new URLSearchParams(queries).get('key'))
    }, [])

    const handleSearchFromQuery = (searchkey) => {
        setDataSearch([])
        axios.get(api.api_search_users, {
            params: {
                username: props.username,
                token: props.token,
                search: searchkey,
            }
        }).then(res => res.data)
            .then(res => {
                if (Array.isArray(res)) {
                    res.map(val0 => {
                        if (Array.isArray(val0)) {
                            val0.map(val1 => {
                                setDataSearch(old => [...old, {
                                    "username": val1.username,
                                    "avatar": val1.avatar,
                                    "fullname": val1.fullname,
                                }])
                            })
                        } else {
                            setDataSearch(old => [...old, {
                                "username": val0.username,
                                "avatar": val0.avatar,
                                "fullname": val0.fullname,
                            }])
                        }
                    })
                } else {
                    setDataSearch([])
                }
            })
            .catch(console.log)
    }

    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <TableNormal title="Tìm bạn bè" dataSource={[...new Map(dataSearch.map(item => [item["username"], item])).values()]}
                        column={[
                            {
                                title: "Họ và tên",
                                key: "fullname",
                            },
                            {
                                title: "Username",
                                key: "username"
                            },
                            {
                                title: "Xem thêm",
                                key: "username",
                                render: (val) => (
                                    <Link to={`/user/${val.username}`} className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold text-1x1 uppercase px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Xem thêm</Link>
                                )
                            }
                        ]}
                    />
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search)
