import { NavLink, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { userLogout } from "../redux/actions/login"

const NavBar = (props) => {
    const logout = (e) => {
        e.preventDefault();
        props.logout();
        props.history.push('/login');
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink className="navbar-brand mb-0 h1" to="/">Would You Rather</NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Questions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>
                            Create Question
                        </NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-sm-0">
                    <label className="form-label mr-sm-2">
                        Welcome {props.username}!
                    </label>
                    <button onClick={logout} class ="btn btn-outline-warning my-2 my-sm-0" type ="submit">logout</button>
                </form>
            </div>
        </nav>
    )
}

export default withRouter(connect(
    ({users, authedUser}) => ({
        username: users[authedUser].name
    }),
    (dispatch) => ({
        logout:()=>{
            dispatch(userLogout())
        }
    })
)(NavBar))