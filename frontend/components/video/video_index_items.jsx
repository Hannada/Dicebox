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
                    <p className="index-user"><img src={window.diceLoginUrl} width="20" height="20" />{video.user_name}</p>
                </div>
            </Link>
            <div className="index-space"></div>
        </div>
    );
};

// const VideoIndexItem = ()=> {




//         return (
//         <div className="index-items">
//             <Link to={`/videos/${props.video.id}`} className="index-item"> 
//                 <video width="270.66" height="151.86">
//                     <source src={video.vidUrl} type="video/mp4" />
//                 </video>
//                 <div className="index-vid-text">
//                     <p className="index-title">{video.title}</p>
//                     {/* <p>{video.user_name}</p> */}
//                     {/* <p>views</p> */}
//                 </div>
//             </Link>
//         </div>);
    
// }


// Preparing to alter index item. Item currently doesnt have access to user_id 

export default VideoIndexItem;