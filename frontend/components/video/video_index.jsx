import React from "react";
import VideoIndexItem from "./video_index_items"

class VideoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    debugger

    render() {
        const videos = this.props.videos.map(video => {
            debugger
            return (
                <VideoIndexItem
                    key={video.id}
                    video={video}
                    />
            );
        });

        return (
            <div>
                <ul>
                    {videos}
                </ul>
            </div>
        );
    }
}

export default VideoIndex; 