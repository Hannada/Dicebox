export const fetchVideos = () => (
    $.ajax({
        method: "GET",
        url: "api/videos"    
    })
)

export const fetchVideo = id => (
    $.ajax({
        method: "GET",
        url: `api/videos/${id}`

    })
) 


export const postVideo = video => (
    $.ajax({
        method: "POST",
        url: "api/videos",
        data: {video}
    })
)

export const deleteVideo = videoId => (
    $.ajax({
        method: "DELETE",
        url: `api/video/${videoId}`
    })
)

export const searchVids = searchResults => (
    $.ajax({
        method: "GET",
        url: "api/videos/search",
        data: {searchResults}
    })
)

//Might not need this? trying out something else first

