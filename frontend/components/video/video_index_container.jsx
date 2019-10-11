import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import VideoIndex from "./video_index";
import { fetchVideos } from "../../actions/video_action";
import { fetchUser } from "../../actions/session_actions";

const msp = (state) => {
    return ({
        videos: Object.keys(state.entities.videos).map(id => state.entities.videos[id])
    })
}

const mdp = dispatch => {
    return ({
        fetchVideos: () => dispatch(fetchVideos()),
        fetchUser: id => dispatch(fetchUser(id))
    })
}

export default connect(msp, mdp)(VideoIndex);

