import * as VideoUtil from "../util/video_util";

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_CURRENT_VIDEO = "RECEIVE_CURRENT_VIDEO";
// export const POST_VIDEO = "POST_VIDEO";

export const receiveAllVideos = videos => ({
    type: RECEIVE_ALL_VIDEOS,
    videos
})

export const receiveCurrentVideo = video => ({
    type: RECEIVE_CURRENT_VIDEO,
    video 
})

export const fetchVideos = () => dispatch => (
    VideoUtil.fetchVideos().then(videos => dispatch(receiveAllVideos(videos)))
)

export const fetchVideo = id => dispatch => (
    VideoUtil.fetchVideo(id).then(video => dispatch(receiveCurrentVideo(video)))
)

export const postVideo = video => dispatch => (
    VideoUtil.postVideo(video).then(video => dispatch(receiveCurrentVideo(video)))
)

