import React from "react"; 
import { Link } from "react-router-dom";

const Welcome = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign Up!</Link>
        </nav>
    )

    const logoutOption = () => (
        <button onClick={logout}>Logout</button>
    )
    return currentUser ? logoutOption() : sessionLinks(); 
}

export default Welcome; 