import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = ({errors}) => {
    return ({
        errors: errors.session,
        formType: "Next",
        navLink: <Link to="/login">Login instead</Link>
    })
}


const mdp = dispatch => {
    return ({
        regForm: user => dispatch(signup(user))
    })
}



export default connect(msp, mdp)(SessionForm);