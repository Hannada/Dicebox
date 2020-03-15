import { CLEAR_SEARCH, SEARCH_VIDS } from "../../actions/video_action";
// import merge from "lodash/merge";


const searchReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case SEARCH_VIDS:
            return action.searchVideos;
        case CLEAR_SEARCH:
            return []
        default:
            return state;
    }
};

export default searchReducer;