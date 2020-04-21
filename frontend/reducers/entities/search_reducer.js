import { CLEAR_SEARCH, SEARCH_VIDEOS } from "../../actions/video_action";
import merge from "lodash/merge";


const searchReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case SEARCH_VIDEOS:
            return merge({}, action.videos)
            // return merge({}, action.videos)
            // Returning nil
            //altering to searches to match name in entities 
        case CLEAR_SEARCH:
            return []
        default:
            return state;
    }
};

export default searchReducer;