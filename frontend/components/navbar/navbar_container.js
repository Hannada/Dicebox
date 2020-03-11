import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import {revertSidebar, expandSidebar} from "../../actions/navbar_sidebar_action"
import Navbar from "./navbar"

// const msp = ({ session, entities: { users } }) => {
//     debugger 
//     return ({
//         currentUser: users[session.id], 
//         isOpen: false 
//     })
// }

// refactor seems to be workings without issues

const msp = (state, ownProps) => {
    // debugger 
    return({
        
        currentUser: state.entities.users[state.session.id],
        isOpen: state.entities.navbarSidebar.isOpen
    })
}

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout()),
        revert: () => dispatch(revertSidebar()),
        expand: () => dispatch(expandSidebar()),
    })
}

export default connect(msp, mdp)(Navbar);
