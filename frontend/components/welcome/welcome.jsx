import React from "react"; 
import { Link } from "react-router-dom";

const Welcome = ({currentUser, logout}) => {


    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up!</Link>
            <Link to="/videos/1">Video Test</Link>
        </nav>
    )

    const logoutOption = () => (
        <hgroup>
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Logout</button>
            <Link to="/videos/1">Video Test</Link>
            <Link to="/">Home</Link>

        </hgroup>
    )
    
    return currentUser ? logoutOption() : sessionLinks(); 
}

// class Welcome extends React.Component {
//     render() {
//         return (
//         <ul>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//              <Link to="/login">Login</Link>
//             </li>
//         </ul>
//         )
//     }
// }

export default Welcome; 