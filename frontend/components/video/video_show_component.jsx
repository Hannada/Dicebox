import { connect } from "react-redux";
import React from "react" ;
import { Link } from "react-router-dom";
import VideoShow from "./video_show";
import { fetchVideo, receiveCurrentVideo } from "../../actions/video_action";

const msp = (state, ownProps) => {
    return({
        video: state.videos[ownProps.match.params.id]
    })
}

const mdp = dispatch => {
    return({
        // fetchVideo: video => dispatch(receiveCurrentVideo(video))
    })
}

export default connect(msp, mdp)(VideoShow);