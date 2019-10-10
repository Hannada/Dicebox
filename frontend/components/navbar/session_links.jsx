import React from "react";
import { Link } from "react-router-dom";


export const sessionLinks = () => (
    <nav className="login-signup">
        <Link to="/" className="home">Home</Link>
        <Link to="/videos/1">Video Test</Link>
        <Link to="/login" className="login-button">Login</Link>
        {/* <Link to="/signup">Sign Up!</Link> */}
    </nav>
)
