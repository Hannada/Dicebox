import React from "react"; 
import {Route, Switch, Link} from "react-router-dom"
import LoginFormContainer from "../components/login_signup/login_form_container";
import SignupFormContainer from "../components/login_signup/signup_form_container";
import WelcomeContainer from "./welcome/welcome_container";
import IdentifierFormContainer from "./identifier/identifier_form_container";
import Homepage from "./homepage/homepage"
import NavbarForm from "./navbar/navbar_form";
// import AuthRoute from "../util/route_util";


const DiceboxApp = () => (
    <div>
        <header>
            <WelcomeContainer/>
        </header>
        <Switch>
             <Route path="/login" component={IdentifierFormContainer} />
             <Route path="/signup" component={SignupFormContainer} />
             <Route path="/" component={Homepage}/>
        </Switch>
    </div>
)

// const DiceboxApp = () => (
//     <div>
//         <header>
            
//                 <WelcomeContainer/> 
//         </header>
//         <Switch>
//             <Route path="/login" component={LoginFormContainer} />
//             <Route path="/signup" component={SignupFormContainer} />
//             <Route path="/" component={Homepage}/>
//         </Switch>
//     </div>
// )

export default DiceboxApp;

//Condense header into navbar component, have a button leading to login/signup
