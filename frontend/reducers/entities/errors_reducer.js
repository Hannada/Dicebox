import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import userErrorsReducer from "./users_reducer";
import videoErrorsReducer from "./video_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    user: userErrorsReducer,
    video: videoErrorsReducer
});

export default errorsReducer;