import { combineReducers } from 'redux';

import sessionReducer from "./entities/session_reducer";
import entitiesReducer from "./entities/entities_reducer";
import errorsReducer from "./entities/errors_reducer";
import videosReducer from "./entities/videos_reducer";
import sessionErrorsReducer from "./entities/session_errors_reducer";


const rootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    sessionErrors: sessionErrorsReducer,
    // videos: videosReducer
});

export default rootReducer;
