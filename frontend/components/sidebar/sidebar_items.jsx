import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from "../../actions/session_actions";



const SidebarItem = ({ video }) => {
    // const user = fetchUser(video.user_id);
    return (
        <div>
            <Link to={`/videos/${video.id}`}>
                <video width="300" height="350">
                    <source src={video.vidUrl} type="video/mp4" />
                </video>
                <p>{video.title}</p>
                {/* <p>{user.username}</p> */}
            </Link>
        </div>);
};

export default SidebarItem;