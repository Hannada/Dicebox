import {STANDARD_SIDEBAR, EXPAND_SIDEBAR} from "../../actions/navbar_sidebar_action";

const navbarSidebarReducer = (state = {isOpen: false}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case STANDARD_SIDEBAR:
            return {isOpen: false}
        case EXPAND_SIDEBAR:
            return {isOpen: true}
        default:
            return state;
    }
}

export default navbarSidebarReducer;