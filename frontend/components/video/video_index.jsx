import React from "react";
import VideoIndexItem from "./video_index_items"

class VideoIndex extends React.Component {
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
            <div>
                {/* <ul className="video-links"> */}
                    {videos}
                {/* </ul> */}
            </div>
        );
    }
}

export default VideoIndex; 