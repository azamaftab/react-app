import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "../home/home";
import Course from "../course/course";
import Navbar from "../nav/navbar";
import NotFound from "../Error/notFound"

import configureStore from "../../store/configureStore";
export default () => (
    <BrowserRouter>
        <div>
            <Navbar></Navbar>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/course" component={Course} />
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);
