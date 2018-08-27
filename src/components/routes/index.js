import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../home/home";
import Course from "../course/course";
import Navbar from "../nav/navbar";

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
