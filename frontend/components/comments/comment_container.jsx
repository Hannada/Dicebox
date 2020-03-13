import { connect } from 'react-redux'
import React from "react";
import { Link } from "react-router-dom";
import {postComment} from "../../actions/comment_action";
import CommentForm from "./comment_form";


const msp = (state, ownProps) => {
    // debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        // currentVid: state.entities.videos[ownProps.match.params.videoId],

    })
}

const mdp = dispatch => {
    return ({
        postComment: (comment, videoId) => dispatch(postComment(comment, videoId)),

    })
}

export default connect(msp, mdp)(CommentForm); 