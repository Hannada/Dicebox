export const postComment = (comment, videoId) => (
    $.ajax({
        method: "POST",
        url: `api/videos/${videoId}/comments`,
        data: {comment}
    })
)