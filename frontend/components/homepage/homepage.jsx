import React from "react"; 
import Welcome from "../welcome/welcome"
import WelcomeContainer from "../welcome/welcome_container"
import { Link } from "react-router-dom"
import VideoIndexContainer from "../video/video_index_container";
// import { Image } from "react"
// import VideoIndex from "../video/video_index";

const Homepage = () => (
    <div className="absolute-home">
        <WelcomeContainer/>
        {/* <div>Reccomended</div> */}
        <label className="dupe-vids"><VideoIndexContainer/></label>
      
    </div>
)

export default Homepage;