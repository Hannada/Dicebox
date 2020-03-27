import { RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS, REMOVE_COMMENT} from "../../actions/comment_action"
import { RECEIVE_CURRENT_VIDEO } from "../../actions/video_action";
import merge from "lodash/merge";


const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            // return Object.assign({}, state, action.comments)
            // return action.comments
            let nextState = {};
            let commentIndex = Object.values(action.comments)
            commentIndex.forEach(comment => {
                nextState[comment.extract.id] = comment.extract
            })
            return merge({}, state, nextState)
        case RECEIVE_COMMENT:
            return Object.assign({}, state, action.comment)
        case REMOVE_COMMENT:
            let newState = Object.assign({}, state);
            delete newState[action.commentId];
            return newState;
        // case RECEIVE_CURRENT_VIDEO:
            // return merge({}, state, { [action.video.id]: action.video });

        default:
            return state;
    }
}

export default commentsReducer;