import React from "react"; 
import {Route, Switch, Link} from "react-router-dom"
import LoginFormContainer from "../components/login_signup/login_form_container";
import SignupFormContainer from "../components/login_signup/signup_form_container";
import WelcomeContainer from "./welcome/welcome_container";
import IdentifierFormContainer from "./identifier/identifier_form_container";
import Homepage from "./homepage/homepage"
import VideoShowContainer from "./video/video_show_container";
import VideoIndexContainer from "./video/video_index_container";
import Navbar from "./navbar/navbar_container";
import Sidebar from "./sidebar/sidebar_container";
import VideoPostContainer from "./video/video_post_form_container";
// import SidebarContainer from "./sidebar/sidebar_container";
// import AuthRoute from "../util/route_util";


const DiceboxApp = () => (
    <div>
        <style>{'body { background-color: #3e3e3e;; }'}</style>
        {/* <Navbar/> */}
        {/* <Sidebar/> */}
        {/* Will likely need to refactor these here */}

      
        <Switch>
             <Route path="/password" component={LoginFormContainer}/>
             <Route path="/login" component={IdentifierFormContainer}/>
             <Route path="/signup" component={SignupFormContainer} />
             <Route path="/videos/:videoId" component={VideoShowContainer} />
             <Route path="/videoupload" component={VideoPostContainer} />
             <Route path="/" component={Homepage}/>
        </Switch>
        {/* <Route exact path="/" component={VideoIndexContainer} /> */}
    </div>
)



export default DiceboxApp;

