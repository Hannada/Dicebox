import React from "react"; 
import Welcome from "../welcome/welcome"
import WelcomeContainer from "../welcome/welcome_container"
import { Link } from "react-router-dom"
import VideoIndexContainer from "../video/video_index_container";
import SidebarContainer from "../sidebar/sidebar_container";
// import { Image } from "react"
// import VideoIndex from "../video/video_index";

const Homepage = () => (
    <div className="absolute-home">
        <div className="sidebar-home">
            <SidebarContainer/>
        </div>
        <div className="navbar-index-vids">
            <div className="navbar">
                <WelcomeContainer/>
            </div>
            <div className="sidebar-index-cluster">
                    {/* <div>Reccomended</div> */}
                    <div>
                        <VideoIndexContainer/>
                    </div>
                    <div>
                        <VideoIndexContainer />
                    </div>

            </div>
        </div>
      
    </div>
)

export default Homepage;