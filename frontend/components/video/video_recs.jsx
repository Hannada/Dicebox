import React from 'react';
import { Link } from 'react-router-dom';



const VideoRecs = ({ video }) => {


    return (
        <div className="rec-items">
            <Link to={`/videos/${video.id}`} className="rec-item">
                <video width="270.66" height="151.86">
                    <source src={video.vidUrl} type="video/mp4" />
                </video>
                <div className="rec-vid-text">
                    <p className="rec-title">{video.title}</p>
                    <p className="rec-user">{video.user_name}</p>
                </div>
            </Link>
        </div>);
};

export default VideoRecs;
