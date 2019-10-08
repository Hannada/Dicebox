import React from "react"; 
import { Link } from "react-router-dom";

const Welcome = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up!</Link>
        </nav>
    )

    const logoutOption = () => (
        <hgroup>
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Logout</button>
        </hgroup>
    )
    return currentUser ? logoutOption() : sessionLinks(); 
}

export default Welcome; 