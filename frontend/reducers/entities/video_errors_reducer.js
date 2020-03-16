import { CLEAR_ERRORS } from "../../actions/session_actions";
import {RECEIVE_VIDEO_ERRORS, CLEAR_VIDEO_ERRORS} from "../../actions/video_action";

const videoErrorsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors;
        case CLEAR_VIDEO_ERRORS:
            return {};
        case CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
}

export default videoErrorsReducer;