import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
// components

import Spin from "components/Spinners/Spin";
import Navbar from "components/Navbars/AuthNavbar";

const Login = (props) => {

  const [datalogin, setDatalogin] = useState({
    "username": "",
    "password": "",
  })

  const handleChangedata = (e) => {
    setDatalogin({
      ...datalogin,
      [e.target.name] : e.target.value.trim()
    })
  }

  useEffect(() => {
    if (props.error) {
      props.resetError();
    }
  }, [props])

  const handleLogin = (e) => {
    e.preventDefault();
    props.onAuth(datalogin.username, datalogin.password)
  }

  return (
    props.loading ?
      <Spin />
      :
      !props.isAuthenticated ?
        <>
        <Navbar transpent />
          <main>
            <section className="relative w-full h-full py-40 min-h-screen">
              <div
                className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/register_bg_2.png").default + ")",
                }}
              ></div>
              <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                      <div className="rounded-t mb-0 px-6 py-4">
                      </div>
                      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-center mb-3">
                      <h6 className="text-blueGray-500 text-xl font-bold">
                        Đăng nhập
                      </h6>
                    </div>
                    <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <form>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Tên đăng nhập
                            </label>
                            <input
                              type="username" name="username"
                              id="username"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Tên đăng nhập" onChange={handleChangedata}
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password" 
                            >
                              Mật khẩu
                            </label>
                            <input
                              type="password" name="password"
                              id="password"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Mật khẩu" onChange={handleChangedata}
                            />
                          </div>

                          <div className="text-center mt-6">
                            <button
                              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                              onClick={handleLogin}
                            >
                              Đăng nhập
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="flex flex-wrap mt-6 relative">
                      <div className="w-1/2">
                        <a
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          className="text-blueGray-200"
                        >
                          <small>Quên mật khẩu?</small>
                        </a>
                      </div>
                      <div className="w-1/2 text-right">
                        <Link to="/register" className="text-blueGray-200">
                          <small>Chưa có tài khoản? Click ngay</small>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

        </>
        :
        props.history.push("/")
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)