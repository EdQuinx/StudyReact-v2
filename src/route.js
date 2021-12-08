import React from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "layouts/Admin";
import Login from "views/auth/Login";
import Register from "views/auth/Register";
const BaseRouter = () => (
    <Switch>
        <Route exact path="/" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
    </Switch>
);

export default BaseRouter;