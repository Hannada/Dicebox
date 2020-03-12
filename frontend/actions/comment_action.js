import * as CommentUtil from "../util/comment_util";
import { RECEIVE_ALL_VIDEOS } from "./video_action";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT"; 
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment 
})

export const receiveAllComments = comments => ({
    type: RECEIVE_ALL_VIDEOS,
    comments 
})

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId 
})

// export const fetchComment = (videoId, commentId) => dispatch => (
//     CommentUtil.receiveComment(videoId, commentId)
//     .then(comment => dispatch(receiveComment(comment)))
// )

// export const fetchComments

export const postComment = (comment, videoId) => dispatch => (
    CommentUtil.postComment(comment, videoId)
        .then(comment => dispatch(receiveComment(comment))) 
)

export const deleteComment = (commentId, videoId) => dispatch => (
    CommentUtil.deleteComment(commentId, videoId)
        .then(() => dispatch(removeComment(commentId)))
)