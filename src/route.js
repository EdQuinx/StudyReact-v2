import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "views/admin/Dashboard.js";
import ChatApp from "views/app/chat";
import Profile from "views/Profile";

const BaseRouter = () => (
    <Switch>
        <Route path="*" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />

    </Switch>
);

export default BaseRouter;