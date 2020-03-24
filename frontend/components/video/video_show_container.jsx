import { connect } from "react-redux";
import React from "react" ;
import { Link } from "react-router-dom";
import VideoShow from "./video_show";
import { fetchVideo, fetchVideos, receiveCurrentVideo } from "../../actions/video_action";
// import {fetchUser} from "../../actions/session_actions";

const msp = (state, ownProps) => {
    return({
        video: state.entities.videos[ownProps.match.params.videoId],
        videos: Object.keys(state.entities.videos).map(id => state.entities.videos[id]),
        // user: state.entities.users[video.user_id],
        users: state.entities.users,
        comments: state.entities.comments,
        currentUser: state.session.currentUser
    })
}

const mdp = dispatch => {
    return({
        fetchVideos: () => dispatch(fetchVideos()),
        fetchVideo: id => dispatch(fetchVideo(id))
    })
}

export default connect(msp, mdp)(VideoShow);