import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import videosReducer from "./videos_reducer";
import navbarSidebarReducer from "./navbar_sidebar_reducer";
import commentsReducer from "./comments_reducer";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    comments: commentsReducer,
    navbarSidebar: navbarSidebarReducer,
    searches: searchReducer

});

export default entitiesReducer;