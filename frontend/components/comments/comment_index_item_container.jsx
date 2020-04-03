import React from "react";
import {connect} from "react-redux";
import CommentIndexItem from "./comment_index_item";

const msp = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        // commentAuthor: state.entities.users[comment.user_id]
    })
}

const mdp = dispatch => {
    return({

    })
}

export default connect(msp, mdp)(CommentIndexItem);