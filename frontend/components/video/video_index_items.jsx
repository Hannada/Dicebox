import React from 'react';
import { Link } from 'react-router-dom';


const VideoIndexItem = ({ video }) => {
    return (
        <li>
            <Link to={`/posts/${video.id}`}> {video.title}</Link>
            <Link to={`/posts/${video.id}/edit`}></Link>
        </li>);
};

export default VideoIndexItem;