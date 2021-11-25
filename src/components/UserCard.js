import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleLogin } from "../redux/actions/login";

const UserCard = (props) => {
    const selectUser = (e) => {
        e.preventDefault();
        props.login(props.user.id);
        props.history.push('/')
    }
    return (
        <li>
            <div className='user'>
                <img className='avatar' src={props.user.avatarURL} alt={props.user.name}/>
                <div className='user-info'>
                    <span className='active'>{props.user.name}</span>
                    <small>@{props.user.id}</small>
                </div>
                {!props.authedUser ?
                    <div onClick={selectUser} className='login-info'>
                        <button className='btn-md btn-outline-primary'>Login as {props.user.name}</button>
                    </div>
                    :
                    <div className='user-score'>
                        <ul className='py-0 my-0'>
                            <li className='my-0 py-0'>
                                <button class="btn-sm btn-primary">
                                    Asked <span class="badge badge-light">{props.user.questions.length}</span>
                                </button>
                            </li>
                            <li className='my-0 py-1'>
                                <button class="btn-sm btn-primary">
                                    Answered <span class="badge badge-light">{Object.keys(props.user.answers).length}</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </li>
    )
}

export default withRouter(connect(
    ({ users, authedUser}, {uId}) => {
        console.log(users[uId]);
        return {
            user: users[uId],
            authedUser
        }
    },
    (dispatch) => ({
        login: (uId) =>{
            dispatch(handleLogin(uId))
        }
    })
)(UserCard))