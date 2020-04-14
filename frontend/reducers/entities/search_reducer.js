import { CLEAR_SEARCH, SEARCH_VIDS } from "../../actions/video_action";
import merge from "lodash/merge";


const searchReducer = (state = [], action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case SEARCH_VIDS:
            return merge({}, action.searches)
            // Returning nil
            //altering to searches to match name in entities 
        case CLEAR_SEARCH:
            return []
        default:
            return state;
    }
};

export default searchReducer;