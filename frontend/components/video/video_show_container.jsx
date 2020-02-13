import { connect } from "react-redux";
import React from "react" ;
import { Link } from "react-router-dom";
import VideoShow from "./video_show";
import { fetchVideo, fetchVideos, receiveCurrentVideo } from "../../actions/video_action";
// import {fetchUser} from "../../actions/session_actions";

const msp = (state, ownProps) => {
    // debugger 
    return({
        video: state.entities.videos[ownProps.match.params.videoId],
        // user: state.entities.users[video.user_id]
    })
}

const mdp = dispatch => {
    return({
        fetchVideos: () => dispatch(fetchVideos()),
        fetchVideo: id => dispatch(fetchVideo(id))
    })
}

export default connect(msp, mdp)(VideoShow);