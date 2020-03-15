import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import { fetchVideo, fetchVideos, clearSearch, searchVideos } from "../../actions/video_action";

const msp = (state, ownProps) => {
    return({
        videos: Object.keys(state.entities.videos).map(id => state.entities.videos[id]),
        searching: Object.keys(state.entities.searchs),


    })
}

const mdp = dispatch => {
    return({
        fetchVideos: () => dispatch(fetchVideos()),
        searchVideos: searchResults => dispatch(searchVideos(searchResults)),
        clearSearch: () => dispatch(clearSearch())
    })
}

export default connect(msp, mdp)(Search);