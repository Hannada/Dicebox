import {connect} from "react-redux";
import CommentIndexItem from "./comment_index_item";

const msp = state => {
    return ({
        currentUser: state.session.currentUser
    })
}

const mdp = dispatch => {
    return({

    })
}

export default connect(msp)(mdp)(CommentIndexItem);