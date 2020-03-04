import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CHECK_USER_EMAIL = "CHECK_USER_EMAIL";

export const CLEAR_ERRORS = "CLEAR_ERRORS"; //Trying something else out

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveSessionErrors = error => ({
    type: RECEIVE_SESSION_ERRORS,
    error
})

export const checkUserEmail = email => ({
    type: CHECK_USER_EMAIL,
    email 
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})



export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user))),
    errors => (
        dispatch(receiveSessionErrors(errors.responseJSON))
    )  //add error option 
);

export const login = (user) => dispatch => (
    SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user))),
    errors => (
        dispatch(receiveSessionErrors(errors.responseJSON))
    )
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(user => dispatch(logoutCurrentUser()))
);

// export const checkEmail = email => dispatch => {
//     return (
//         SessionAPIUtil.email_check(email).then(email => dispatch(checkUserEmail(email))),
//         error => (
//             dispatch(receiveSessionErrors(error.responseJSON))
//         )
//     )
// };

//Currently Errors is causing verify form to explode. Looking into methods of testing.

// export const checkEmail = email => dispatch => (
//     SessionAPIUtil.email_check(email).then(email => dispatch(checkUserEmail(email)))
// );

export const checkEmail = email => dispatch => (
    SessionAPIUtil.email_check(email).then(email => dispatch(checkUserEmail(email)))
);

export const fetchUser = id => dispatch => (
    SessionAPIUtil.fetchUser(id).then(user => dispatch(receiveCurrentUser(user)))
);