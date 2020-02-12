import React from 'react';
import { Link } from 'react-router-dom';



const VideoIndexItem = ({ video }) => {
    return (
        <div className="index-items">
            <Link to={`/videos/${video.id}`} className="index-item"> 
                <video width="270.66" height="151.86">
                    <source src={video.vidUrl} type="video/mp4" />
                </video>
                <div className="index-vid-text">
                    <p className="index-title">{video.title}</p>
                    {/* <p>{video.user_name}</p> */}
                    <p>views</p>
                </div>
            </Link>
        </div>);
};

export default VideoIndexItem;