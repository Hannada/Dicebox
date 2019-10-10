import React from 'react';
import { Link } from 'react-router-dom';


const VideoIndexItem = ({ video }) => {
    return (
        <div>
            <Link to={`/videos/${video.id}`}> 
                <video width="500" height="550" controls>
                    <source src={video.vidUrl} type="video/mp4" />
                </video>
                <p className="index-title">{video.title}</p>
            </Link>
        </div>);
};

export default VideoIndexItem;