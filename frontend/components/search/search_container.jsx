import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import { fetchVideo, fetchVideos, clearSearch, searchAllVids } from "../../actions/video_action";

const msp = (state, ownProps) => {
    const searchVids = Object.values(state.entities.searches)
    return({
        videos: Object.keys(state.entities.videos).map(id => state.entities.videos[id]),
        searchVids
        // searching: Object.keys(state.entities.searchs),
        // searchList: searchList


    })
}

const mdp = dispatch => {
    return({
        // fetchVideos: () => dispatch(fetchVideos()),
        searchVideos: searchResults => dispatch(searchAllVids(searchResults)),
        clearSearch: () => dispatch(clearSearch())
    })
}

export default connect(msp, mdp)(Search);