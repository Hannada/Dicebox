import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import CommentForm from "./comment_form";
import { postComment } from "../../actions/comment_action";


const msp = (state, ownProps) => {
    // debugger
    return ({
        currentUser: state.entities.users[state.session.id],
        // currentVid: state.entities.videos[ownProps.match.params.videoId],
        // videos: Object.keys(state.entities.videos).map(id => state.entities.videos[id])


    });
}

const mdp = dispatch => {
    return ({
        postComment: (comment, videoId) => dispatch(postComment(comment, videoId)),

    })
}

// export default connect(msp, mdp)(CommentForm); 
const CommentFormContainer = connect(msp, mdp)(CommentForm); 
export default withRouter(CommentFormContainer);
