import { connect } from "react-redux";
import React from "react" ;
import { Link } from "react-router-dom";
import VideoShow from "./video_show";
import { fetchVideo, fetchVideos, receiveCurrentVideo } from "../../actions/video_action";

const msp = (state, ownProps) => {
    return({
        video: state.entities.videos[ownProps.match.params.videoId]
    })
}

const mdp = dispatch => {
    return({
        fetchVideos: () => dispatch(fetchVideos()),
        fetchVideo: id => dispatch(fetchVideo(id))
    })
}

export default connect(msp, mdp)(VideoShow);