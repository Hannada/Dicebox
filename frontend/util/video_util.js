export const fetchVideos = () => (
    $.ajax({
        method: "GET",
        url: "api/videos"    
    })
)

// export const fetchVideos = search => {

//     const data = {}

//     if(search !== '') {
//         Object.assign(data, search);
//     }

//     return (
//     $.ajax({
//         method: "GET",
//         url: "api/videos",
//         data
//     })
//     )
// }

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
    return (
        $.ajax({
            method: "GET",
            // url: `api/videos/search/${searchResults}`,
            url: "api/videos",
            data: {searchResults}
        })
    )
}

// Need this to query backend 

