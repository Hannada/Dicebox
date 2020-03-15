import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import { fetchVideo, fetchVideos, clearSearch, searchVideos } from "../../actions/video_action";

const msp = (state, ownProps) => {
    return({

    })
}

const mdp = dispatch => {
    return({

    })
}

export default connect(msp, mdp)(Search);