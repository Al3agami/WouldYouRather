import { connect } from 'react-redux'
import UsersList from './UsersList'

const Leaderboard = (props) => {
    return (
        <div>
            <h3 className='center'>Leaderboard</h3>
            <UsersList/>
        </div>
    )
}

export default connect(
    (state) => ({
        
    }),
    (dispatch) => ({

    })
)(Leaderboard)