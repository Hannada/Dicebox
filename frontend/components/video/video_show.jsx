import React from "react";
import { recieveCurrentUser } from "../../actions/session_actions";
import Welcome  from "../welcome/welcome"
import WelcomeContainer from "../welcome/welcome_container"
import VideoIndexContainer from "../video/video_index_container";


class VideoShow extends React.Component {
    constructor(props){
        super(props);  
      
    }

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    render(){
        const { video } = this.props;
        if (!video) {
            return null 
        }

        return(
            <div className="video-show-main">
                <WelcomeContainer/>
                <video className="main-vid" width="1000" height="550" controls>
                    <source src={video.vidUrl} type="video/mp4"/>
                </video>
                <div className="vid-title"><img src={window.diceLoginUrl} width="20" height="20" />{video.title}</div>
                {/* <div>{recieveCurrentUser(video.user_id)}</div> */}
                <div> {video.user_id}</div>
                <div className="vid-description">{video.description}</div>

                <div className="sidebar-index"><VideoIndexContainer/></div>
            </div>
        )
    }
}

export default VideoShow; 