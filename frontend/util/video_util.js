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


// export const postVideo = video => (
//     $.ajax({
//         method: "POST",
//         url: "api/videos",
//         data: {video}
//     })
// )

export const postVideo = video => {
    if (video instanceof FormData) {
        return(
            $.ajax({
                method: "POST",
                url: "api/videos",
                data:  video, 
                processData: false,
                contentType: false,
            })
        )
    } else {
        return(
            $.ajax({
                method: "POST",
                url: "api/videos",
                data: {video}
            })
        )
    }
        
}

// note

// export const updateProject = (project, id) => {
//     if (project instanceof FormData) {
//         return (
//             $.ajax({
//                 method: 'PATCH',
//                 url: `/api/projects/${id}`,
//                 data: project,
//                 processData: false,
//                 contentType: false,
//             })
//         );
//     } else {
//         return (
//             $.ajax({
//                 method: 'PATCH',
//                 url: `/api/projects/${id}`,
//                 data: { project },
//             })
//         );
//     }
// };

export const deleteVideo = videoId => (
    $.ajax({
        method: "DELETE",
        url: `api/video/${videoId}`
    })
)

export const searchVids = searchResults => {
    debugger 
    return (
        $.ajax({
            method: "GET",
            url: "api/videos/search",
            data: {searchResults}
        })
    )
}

//Might not need this? trying out something else first

