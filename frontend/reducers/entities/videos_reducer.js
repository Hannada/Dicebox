import { RECEIVE_ALL_VIDEOS, RECEIVE_CURRENT_VIDEO, REMOVE_CURRENT_VIDEO} from "../../actions/video_action";
import merge from "lodash/merge";


const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_VIDEO:
            return merge({}, state, { [action.video.id]: action.video });
        case RECEIVE_ALL_VIDEOS:
            return merge({}, action.videos);
        case REMOVE_VIDEO:
            let newState = Object.assign({}, state);
            delete newState[action.videoId];
            return newState;
        default:
            return state;
    }
};

export default videosReducer;
