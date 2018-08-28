import React from "react";
import { BrowserRouter as Router, Route, History } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "../home/home";
import Course from "../course/course";
import Navbar from "../nav/navbar";
import configureStore from "../../store/configureStore";

export default () => (
    
        <Router>
            <div>
                <Navbar></Navbar>
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route path="/course" component={Course} />
                </div>
            </div>
        </Router>
);
