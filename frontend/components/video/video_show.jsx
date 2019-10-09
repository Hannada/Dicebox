import React from "react";

class VideoShow extends React.Component {
    constructor(props){
        super(props);  
    }

    render(){
        return(
            <div className="video-show-main">
                <label className="video-player" src={this.state.video.vid}></label>
            </div>
        )
    }
}

export default VideoShow; 