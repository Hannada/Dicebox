import React from "react";
import { Link } from "react-router-dom";

export const logoutLinks = () => (
    <hgroup>
        <h2 className="header-name">{currentUser.username}</h2>
        <button className="header-button" onClick={logout}>Logout</button>
        <Link to="/videos/1">Video Test</Link>
        <Link to="/">Home</Link>

    </hgroup>
)