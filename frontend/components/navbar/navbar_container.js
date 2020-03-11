import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
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
        isOpen: false 
    })
}

const mdp = dispatch => {
    return ({
        logout: () => dispatch(logout())
    })
}

export default connect(msp, mdp)(Navbar);
