import { _getUsers } from "../../utils/_DATA"

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const handleGetAllUsers = () => {
    return (dispatch) => {
        _getUsers()
            .then(users => {
                dispatch(getAllUsers(users))
            })
            .catch(error => {
                alert('Error occurred!');
            })
    }
}

const getAllUsers = (users) => ({
    type: RECEIVE_USERS,
    payload: users
})