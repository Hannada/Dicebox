import { connect } from "react-redux"; 
import React from "react"; 
import { Link } from "react-router-dom";
import { login, checkEmail } from "../../actions/session_actions";
import SessionForm from "./session_form";
import LoginForm from "./login_form";

const msp = ({errors}) => {
    return ({
        session_errors: errors.session,
        user_errors: errors.user, //trying to split up the errors
        formType: "login",
        navLink: <Link to="/signup">Create Account</Link>
    })
}

const mdp = dispatch => {
    return ({
        regForm: user => dispatch(login(user)),
        verifyForm: email => dispatch(checkEmail(email)),
        renderErrors: errors => dispatch(receiveSessionErrors(errors.responseJSON))

    })
}


export default connect(msp, mdp)(LoginForm);
