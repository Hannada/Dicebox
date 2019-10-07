import React from "react"; 
import {Route, Switch, Link} from "react-router-dom"
import LoginFormContainer from "../components/login_signup/login_form_container";
import SignupFormContainer from "../components/login_signup/signup_form_container";
import WelcomeContainer from "./welcome/welcome_container";
import IdentifierFormContainer from "./identifier/identifier_form_container";
import Homepage from "./homepage/homepage"
// import AuthRoute from "../util/route_util";

const DiceboxApp = () => (
    <div>
        <Route path="/" component={Homepage}/>
        <header>
                <IdentifierFormContainer/>
                <WelcomeContainer/>
        </header>
        <Switch>
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
)

export default DiceboxApp;