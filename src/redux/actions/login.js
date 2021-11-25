import { handleGetAllQuestions } from "./questions";
import { showLoading, hideLoading } from 'react-redux-loading';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const handleLogin = userId => (dispatch, getState) => {
    const { users } = getState();
    if (users[userId]) {
        dispatch(showLoading());
        dispatch(handleGetAllQuestions());
        dispatch(userLogin(userId));
        dispatch(hideLoading());
    }
}

const userLogin = (userId) => ({
    type: USER_LOGIN,
    payload: userId
});


export const userLogout = () => ({
    type: USER_LOGOUT
})