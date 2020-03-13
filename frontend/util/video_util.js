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

// export const searchVids

