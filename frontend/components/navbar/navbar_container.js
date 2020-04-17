import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import {revertSidebar, expandSidebar} from "../../actions/navbar_sidebar_action";
import { searchAllVids } from "../../actions/video_action";
import Navbar from "./navbar"

// const msp = ({ session, entities: { users } }) => {
//     return ({
//         currentUser: users[session.id], 
//         isOpen: false 
//     })
// }

// refactor seems to be workings without issues


// May need to creat separate line of actions for search function.

const msp = (state, ownProps) => {
    return({
        currentUser: state.entities.users[state.session.id],
        isOpen: state.entities.navbarSidebar.isOpen,
        // videos: Object.keys(state.entities.videos).map(id => state.entities.videos[id])

    })
}

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        revert: () => dispatch(revertSidebar()),
        expand: () => dispatch(expandSidebar()),
        searchFilter: searchResults => dispatch(searchAllVids(searchResults))
        // Current problem in th searchfilter function
        // fetchVideos: () => dispatch(fetchVideos()),
    })
}

export default connect(msp, mdp)(Navbar);
