export const postComment = (comment, videoId) => (
    $.ajax({
        method: "POST",
        url: `api/videos/${videoId}/comments`,
        data: {comment}
    })
)

export const fetchComments = (videoId) => {
    $.ajax({
        method: "GET",
        url: `api/videos/${videoId}/comments`
    })
}

export const deleteComment = (videoId, commentId) => {
    $.ajax({
        method: "DELETE",
        url: `api/videos/${videoId}/comments/${commentId}`
    })
}

export const editComment = (comment, videoId) => {
    $.ajax({
        method: "PATCH",
        url: `api/videos/${videoId}/comments/${comment.id}`,
        data: {comment}
    })
}