import { connect } from "react-redux"; 
import React from "react"; 
import { Link } from "react-router-dom";
import { login, checkEmail } from "../../actions/session_actions";
import SessionForm from "./session_form";
import LoginForm from "./login_form";

const msp = ({errors}) => {
    return ({
        errors: errors.session,
        formType: "login",
        navLink: <Link to="/signup">Create Account</Link>
    })
}

const mdp = dispatch => {
    return ({
        regForm: user => dispatch(login(user)),
        verifyForm: email => dispatch(checkEmail(email))

    })
}


export default connect(msp, mdp)(LoginForm);
