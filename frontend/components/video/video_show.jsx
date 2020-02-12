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
        this.props.fetchVideos();
        this.props.fetchVideo(this.props.match.params.videoId)
    }


    componentDidUpdate(prevProps) {

        if (prevProps.match.params.videoId !== this.props.match.params.videoId){
            this.props.fetchVideo(this.props.match.params.videoId);
            this.update();
        }

    }


    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

//     if(this.props.userID !== prevProps.userID) {
//     this.fetchData(this.props.userID);
// }
// Note to attempt using redirect for certain pages later
// else{
//     <Redirect to="/login" />
// }

    render(){
        const { video } = this.props;
        if (!video) {
            return null 
        }
        return(
            <div className="video-show-main">
                <WelcomeContainer/>
                <div className="show">
                    <div className="vid-info">
                        <video className="main-vid" width="1000" height="550" controls autoPlay>
                            <source src={this.props.video.vidUrl} type="video/mp4"/>
                        </video>
                        <div className="linebreak"></div>
                        <div className="vid-title"><img src={window.diceLoginUrl} width="20" height="20" />{video.title}</div>
                        <div> {video.user_name}</div>
                        <div className="vid-description">{video.description}</div>  
                    </div>

                    <div className="sidebar-index">
                        <div className="upnext">Up next</div>
                        <VideoIndexContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoShow; 