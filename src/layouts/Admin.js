import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Spin from "components/Spinners/Spin";
import Login from "views/auth/Login";

const Admin = (props) => {

  return (
    props.loading ?
      <Spin />
      :
      props.isAuthenticated ?
        <React.Fragment>
          <Sidebar />
          <div className="relative md:ml-64 bg-blueGray-100">
            <AdminNavbar />
            <div className="relative bg-lightBlue-600 pb-32 pt-20">
            </div>
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              {props.children}
              <FooterAdmin />
            </div>
          </div>
        </React.Fragment>
        :
        <Login />
  );
}

export default Admin
