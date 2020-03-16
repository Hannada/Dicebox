import * as VideoUtil from "../util/video_util";

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_CURRENT_VIDEO = "RECEIVE_CURRENT_VIDEO";
export const REMOVE_CURRENT_VIDEO = "REMOVE_CURRENT_VIDEO";
export const SEARCH_VIDS = "SEARCH_VIDS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const POST_VIDEO = "POST_VIDEO";

export const receiveAllVideos = videos => ({
    type: RECEIVE_ALL_VIDEOS,
    videos
})

export const receiveCurrentVideo = video => ({
    type: RECEIVE_CURRENT_VIDEO,
    video 
})

const removeCurrentVideo = videoId => ({
    type: REMOVE_CURRENT_VIDEO,
    videoId
})

export const search =  searchResults => ({
    type: SEARCH_VIDS,
    searchResults
})
export const clearSearch = () => ({
    type: CLEAR_SEARCH,
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

export const searchVids = searchResults => dispatch => (
    VideoUtil.searchVids(searchResults).then(searchResults => dispatch(search(searchResults)))
)
