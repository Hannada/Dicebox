import React from "react"; 
import {Route, Switch, Link} from "react-router-dom"
import LoginFormContainer from "../components/login_signup/login_form_container";
import SignupFormContainer from "../components/login_signup/signup_form_container";
import WelcomeContainer from "./welcome/welcome_container";
// import AuthRoute from "../util/route_util";

const DiceboxApp = () => (
    <div>
        <header>
            <h1>I would like to rage</h1>
            <WelcomeContainer/>
        </header>
        <Switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
)

export default DiceboxApp;