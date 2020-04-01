import { connect } from "react-redux";
import React from "react" ;
import { Link } from "react-router-dom";
import VideoShow from "./video_show";
import { fetchVideo, fetchVideos, receiveCurrentVideo } from "../../actions/video_action";
import { fetchComments } from "../../actions/comment_action";
// import {fetchUser} from "../../actions/session_actions";

const msp = (state, ownProps) => {
    debugger
    return({
        video: state.entities.videos[ownProps.match.params.videoId],
        videos: Object.keys(state.entities.videos).map(id => state.entities.videos[id]),
        // user: state.entities.users[video.user_id],
        users: state.entities.users,
        comments: Object.values(state.entities.comments),
        // comments: state.entities.comments[ownProps.match.params.videoId],
        currentUser: state.session.currentUser
    })
}

const mdp = dispatch => {
    return({
        fetchVideos: () => dispatch(fetchVideos()),
        fetchVideo: id => dispatch(fetchVideo(id)),
        fetchComments: videoId => dispatch(fetchComments(videoId))
    })
}

export default connect(msp, mdp)(VideoShow);