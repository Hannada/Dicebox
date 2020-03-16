import {RECEIVE_USER_ERRORS, CLEAR_ERRORS} from "../../actions/session_actions";

const userErrorsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return {}
        default:
            return state;
    }
}

export default userErrorsReducer;