import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "views/admin/Dashboard.js";
import ChatApp from "views/app/chat";
import Search from "views/app/search";
import Profile from "views/Profile";

const BaseRouter = () => (
    <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/profile" component={Profile} />

        
        <Route path="*" component={Dashboard} />
    </Switch>
);

export default BaseRouter;