import React from 'react';
import { Link } from 'react-router-dom';



const VideoRecs = ({video}) => {
    // const video = props.video 


    // const handleClick = () => {
    //     props.history.push(`/videos/${video.id}`)
    // }

    return (
        <div className="index-items">
            <Link to={`/videos/${video.id}`} className="index-item">
                <video width="270.66" height="151.86">
                    <source src={video.vidUrl} type="video/mp4" />
                </video>
                <div className="index-vid-text">
                    <p className="index-title">{video.title}</p>
                    <p className="index-user"><img src={window.diceLoginUrl} width="20" height="20" />{video.user_name}</p>
                </div>
            </Link>
        </div>);
};

export default VideoRecs;
