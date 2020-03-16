import {connect} from "react-redux";
import VideoPostForm from "./video_post_form";
import {clearVideoErrors, uploadVideo} from "../../actions/video_action";

const msp = state => {
    return ({
        errors: state.errors.videos,


    })
}

const mdp = dispatch => {
    return ({
        createVideo: video => dispatch(uploadVideo(video)),
        clearVideoErrors: () => dispatch(clearVideoErrors())
    })
}


export default connect(msp, mdp)(VideoPostForm);