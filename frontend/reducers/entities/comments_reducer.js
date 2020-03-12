import { RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, REMOVE_COMMENT} from "../../actions/comment_action"

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return Object.assign({}, state, action.comments)
        case RECEIVE_COMMENT:
            return Object.assign({}, state, action.comment)
        case REMOVE_COMMENT:
            let newState = Object.assign({}, state);
            delete newState[action.commentId];
            return newState;
        default:
            return state;
    }
}

export default commentsReducer;