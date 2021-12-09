import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "views/admin/Dashboard.js";
import ChatApp from "views/app/chat";

const BaseRouter = () => (
    <Switch>
        <Route path="*" component={Dashboard} />
    </Switch>
);

export default BaseRouter;