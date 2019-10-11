import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from "../../actions/session_actions";



const VideoIndexItem = ({ video }) => {
    // const user = fetchUser(video.user_id);
    return (
        <div>
            <Link to={`/videos/${video.id}`} className="index-item"> 
                <video width="500" height="550" controls>
                    <source src={video.vidUrl} type="video/mp4" />
                </video>
                <p className="index-title">{video.title}</p>
                {/* <p>{user.username}</p> */}
            </Link>
        </div>);
};

export default VideoIndexItem;