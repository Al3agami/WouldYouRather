import UsersList from "./UsersList"
import { connect } from 'react-redux'

const Login = (props) => {
    return (
        <div className='login-form'>
            <h3 className='center'>Login</h3>
            <UsersList/>
        </div>
    )
}

export default connect()(Login)