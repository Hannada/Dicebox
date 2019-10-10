import React from "react"; 
import Welcome from "../welcome/welcome"
import WelcomeContainer from "../welcome/welcome_container"
import { Link } from "react-router-dom"
// import { Image } from "react"
// import VideoIndex from "../video/video_index";

const Homepage = () => (
    <div className="absolute-home">
        <WelcomeContainer/>
        {/* <Link to="/videos/3"><img src={window.critUrl} /></Link> */}
      
    </div>
)

export default Homepage;