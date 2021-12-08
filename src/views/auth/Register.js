import * as api from "api";
import Navbar from "components/Navbars/AuthNavbar";
import Spin from "components/Spinners/Spin";
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';
// components


const Register = (props) => {

  const [dataRegister, setDataRegister] = useState({
    "fullname": "",
    "username": "",
    "password": "",
    "confirmPassword": "",
    "email": "",
    "gender": "male",
    "class": api.classes[0],
  })
  const handleChangedata = (e) => {
    setDataRegister({
      ...dataRegister,
      [e.target.name]: e.target.value.trim()
    })
  }
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(dataRegister);
    //props.authSignup(dataRegister.fullname, dataRegister.username, dataRegister.email, dataRegister.password, dataRegister.confirmPassword, dataRegister.gender, dataRegister.class, [], [])
  }
  useEffect(() => {
    if (props.error) {
      props.resetError();
    }
  }, [props])

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
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                      <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                          <h6 className="text-blueGray-500 text-xl font-bold">
                            Đăng ký tài khoản
                          </h6>
                        </div>
                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        <form>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Họ và tên
                            </label>
                            <input
                              name="fullname"
                              type="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Name"
                              onChange={handleChangedata}
                            />
                          </div>

                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Tên đăng nhập
                            </label>
                            <input
                              name="username"
                              type="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Tên đăng nhập"
                              onChange={handleChangedata}
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
                              name="password"
                              type="password"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Mật khẩu"
                              onChange={handleChangedata}
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Xác nhận mật khẩu
                            </label>
                            <input
                              name="confirmPassword"
                              type="password"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Xác nhận mật khẩu"
                              onChange={handleChangedata}
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Email
                            </label>
                            <input
                              name="email"
                              type="email"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="Email"
                              onChange={handleChangedata}
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Giới tính
                            </label>
                            <select
                              name="gender"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              onChange={handleChangedata}
                            >
                              <option value="male">Nam</option>
                              <option value="female">Nữ</option>
                            </select>
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Lớp
                            </label>
                            <select
                              name="class"
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              onChange={handleChangedata}
                            >
                              {
                                api.classes.map((val) => (
                                  <option value={val}>{val}</option>
                                ))
                              }
                            </select>
                          </div>
                          <hr className="mt-6 border-b-1 border-blueGray-300" />


                          <div className="text-center mt-6">
                            <button
                              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                              type="button"
                              onClick={handleRegister}
                            >
                              Đăng ký
                            </button>
                          </div>
                        </form>
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
    authSignup: (fullname, username, email, password, confirmPassword, gender, classs, goodAt = [], badAt = []) => dispatch(actions.authSignup(fullname, username, email, password, confirmPassword, gender, classs, goodAt = [], badAt = [])),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)