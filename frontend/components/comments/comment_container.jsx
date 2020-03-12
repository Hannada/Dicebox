import { connect } from 'react-redux'
import React from "react";
import { Link } from "react-router-dom";
import {postComment} from "../../actions/comment_action";

const msp = state => {
    return ({
        currentUser: state.entities.users[state.session.id]
    })
}

const mdp = dispatch => {
    return ({
        postComment: (comment, videoId) => dispatch(postComment(comment, videoId))
    })
}

export default connect(msp, mdp)(CommentForm); 