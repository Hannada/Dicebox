import React from "react";
import { recieveCurrentUser } from "../../actions/session_actions";
import Welcome  from "../welcome/welcome"
import WelcomeContainer from "../welcome/welcome_container"

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
                <h1>Hi Video</h1>
                <video width="750" height="350" controls>
                    <source src={video.vidUrl} type="video/mp4"/>
                </video>

                <div className="vid-title">{video.title}</div>
                {/* <div>{recieveCurrentUser(video.user_id)}</div> */}
                <div className="vid-description">{video.description}</div>
            </div>
        )
    }
}

export default VideoShow; 