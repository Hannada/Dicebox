import React from "react"; 
import Welcome from "../welcome/welcome"
import WelcomeContainer from "../welcome/welcome_container"
import { Link } from "react-router-dom"
// import { Image } from "react"
// import VideoIndex from "../video/video_index";

const Homepage = () => (
    <div>
        <WelcomeContainer/>
        <Link to="/videos/4"><img src={window.critUrl} /></Link>
        {/* <Link to="/videos/4">
            <Image src={'app/assets/images/crit.png'} />
        </Link> */}
    </div>
)

export default Homepage;