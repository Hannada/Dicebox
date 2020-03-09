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
        <WelcomeContainer/>
        <div className="sidebar-index-cluster">
            <div className="sidebar-home">
                <SidebarContainer/>
            </div>
                <div>Reccomended</div>
                <div>
                    <VideoIndexContainer/>
                </div>
                <div>
                    <VideoIndexContainer />
                </div>

        </div>
      
    </div>
)

export default Homepage;