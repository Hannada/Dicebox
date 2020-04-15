import * as VideoUtil from "../util/video_util";

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_CURRENT_VIDEO = "RECEIVE_CURRENT_VIDEO";
export const REMOVE_CURRENT_VIDEO = "REMOVE_CURRENT_VIDEO";
export const SEARCH_VIDS = "SEARCH_VIDS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
// export const POST_VIDEO = "POST_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const CLEAR_VIDEO_ERRORS = "CLEAR_ERRORS"; //Trying something else out


export const receiveAllVideos = videos => ({
    type: SEARCH_VIDS,
    videos
})

export const receiveSearchVideos = videos => ({
    type: RECEIVE_ALL_VIDEOS,
    videos
})

// Making a duplicate of recieve all for different results effectively ^

export const receiveCurrentVideo = video => ({
    type: RECEIVE_CURRENT_VIDEO,
    video 
})

export const removeCurrentVideo = videoId => ({
    type: REMOVE_CURRENT_VIDEO,
    videoId
})

export const receiveVideoErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
})

export const clearVideoErrors = () => ({
    type: CLEAR_VIDEO_ERRORS
})

// export const searchVids =  searchResults => ({
//     type: SEARCH_VIDS,
//     searchResults
// })

export const clearSearch = () => ({
    type: CLEAR_SEARCH,
})

// export const fetchVideos = () => dispatch => (
//     VideoUtil.fetchVideos().then(videos => dispatch(receiveAllVideos(videos)))
// )

export const fetchVideos = search => dispatch => {
    if (search) {
        return VideoUtil.fetchVideos(search)
            .then(videos => dispatch(receiveSearchVideos(videos)))
    }else {
        return VideoUtil.fetchVideos(search)
            .then(videos => dispatch(receiveAllVideos(videos)))
    }
}

// The above ismeant to check for some kind of search params. Current working regardless.

export const fetchVideo = id => dispatch => (
    VideoUtil.fetchVideo(id).then(video => dispatch(receiveCurrentVideo(video)))
)

export const uploadVideo = video => dispatch => (
    VideoUtil.postVideo(video).then(video => dispatch(receiveCurrentVideo(video)))
)

export const searchAllVids = searchResults => dispatch => {
    return VideoUtil.searchVids(searchResults)
        .then(searchResults => dispatch(searchVids(searchResults)))
    
}
