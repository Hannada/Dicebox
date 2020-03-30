import React from "react"; 
import Welcome from "../welcome/welcome"
import WelcomeContainer from "../welcome/welcome_container"
import { Link } from "react-router-dom"
import VideoIndexContainer from "../video/video_index_container";
import SidebarContainer from "../sidebar/sidebar_container";
import NavbarContainer from "../navbar/navbar_container";
// import { Image } from "react"
// import VideoIndex from "../video/video_index";

const Homepage = () => (
    <div className="absolute-home">
            <div className="navbar">
                <NavbarContainer/>
            </div>
        <div className="navbar-index-vids">
            <div className="sidebar-home">
                <SidebarContainer/>
            </div>
            {/* <div>using this to make some space</div>  */}
            <div>
                <div className="rec-word">
                    Reccomended 
                </div>
                <div className="dupe-vids">
                    <VideoIndexContainer/>
                </div>
                <div className="dupe-vids"> 
                    <VideoIndexContainer />
                </div>
            </div>

        </div>
      
    </div>
)

export default Homepage;