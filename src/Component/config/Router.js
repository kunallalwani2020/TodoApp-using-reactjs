import React from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Header from'../Header';
import Footer from'../Footer';






export default function AppRouter(){
    return(
        <Router>
            <Route exact path='/' component={Header}/>
            <Route path='/Footer' component={Footer}/>
        </Router>
    )
}