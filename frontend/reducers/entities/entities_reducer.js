import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import videosReducer from "./videos_reducer";
import navbarSidebarReducer from "./navbar_sidebar_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    navbarSidebar: navbarSidebarReducer

});

export default entitiesReducer;