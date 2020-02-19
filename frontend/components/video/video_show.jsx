import React from "react";
import { recieveCurrentUser } from "../../actions/session_actions";
import Welcome  from "../welcome/welcome"
import WelcomeContainer from "../welcome/welcome_container"
import VideoIndexContainer from "../video/video_index_container";
import VideoIndexItem from "../video/video_index_items";


class VideoShow extends React.Component {
    constructor(props){
        super(props);  
        // this.handleChange = this.handleChange.bind(this); // attempting handlechange 
    }

    componentDidMount(){
        this.props.fetchVideos();                
        this.props.fetchVideo(this.props.match.params.videoId);
    }


    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId){
            this.props.fetchVideo(this.props.match.params.videoId);
        }
    }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }


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
        const { video, videos } = this.props;
        if (!video) {
            return null 
        }

        // const videos = videos.map(vid => {

        //     return (
        //         <VideoIndexItem
        //             key={vid.id}
        //             video={vid}
        //         // user={video.user_id}
        //         />
        //     );
        // });

        // onChange={this.update()} Might be used to invoke?
        return(
            <div className="video-show-main">
                <WelcomeContainer/>
                <div className="show">
                    <div className="vid-info">
                        <video className="main-vid" width="1000" height="550" controls autoPlay>
                            <source src={video.vidUrl} type="video/mp4"/>
                        </video>
                        <div className="vid-title"><img src={window.diceLoginUrl} width="20" height="20" />{video.title}</div>
                        <div className="linebreak"></div>
                        <div> {video.user_name}</div>
                        <div className="vid-description">{video.description}</div>  
                        <div className="linebreak"></div>
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