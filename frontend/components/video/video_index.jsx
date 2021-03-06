import React from "react";
import VideoIndexItem from "./video_index_items"

class VideoIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos();
    }


    render() {
        const videos = this.props.videos.map(video => {
            
            return (
                <VideoIndexItem
                    key={video.id}
                    video={video}
                    />
            );
        });

        return (
            <div className="index-all">
                {/* <ul className="video-links"> */}
                    {videos}
                {/* </ul> */}
            </div>
        );
    }
}

export default VideoIndex; 