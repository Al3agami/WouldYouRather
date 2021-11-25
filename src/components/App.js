import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import '../App.css';
import '../bootstrap.css'
import NavBar from './NavBar';
import CreateQuestion from './CreateQuestion';
import QuestionsPage from './QuestionsPage';
import Leaderboard from './Leaderboard';
import Login from './Login';
import { handleGetAllUsers } from '../redux/actions/users';
import QuestionsDetails from './QuestionsDetails';
import ErrorPage from './ErrorPage';

class App extends Component {
  
  componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    const { authedUser } = this.props;
    
      if(authedUser){
        return (
          <BrowserRouter>
            <Fragment>
              <LoadingBar />
              <div className='container'>
                <NavBar />
                <div>
                  <Route path="/" exact component={QuestionsPage} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route path="/add" component={CreateQuestion} />
                  <Route path="/questions/:question_id" component={QuestionsDetails} />
                  <Route path="/login" component={Login} />
                  <Route path="/error/:msg" component={ErrorPage} />
                </div>
              </div>
            </Fragment>
          </BrowserRouter>
        )
      }else{
        return (
          <BrowserRouter>
            <Fragment>
              <LoadingBar />
              <Login />
            </Fragment>
          </BrowserRouter>
        )
      }
  }
}


export default connect(
  ({authedUser}) => ({
    authedUser
  }),
  (dispatch) => ({
    loadUsers: () =>{
      dispatch(handleGetAllUsers());
    }
  })
)(App)
