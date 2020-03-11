import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";


const msp = (state, ownProps) => {
    return ({
        isOpen: state.entities.navbarSidebar.isOpen
    })
}

const mdp = dispatch => {
    return ({

    })
}

export default connect(msp, mdp)(Sidebar);
