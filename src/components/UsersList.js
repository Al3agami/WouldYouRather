import { Component } from "react";
import {connect} from 'react-redux'
import UserCard from "./UserCard";

class UsersList extends Component{
    render(){
        return(
            <div className='container'>
                <ul>
                    {this.props.usersIds.map(uId => <UserCard key={uId} uId={uId}/>)}
                </ul>
            </div>
        )
    }
}


const numberOfAsked = (user) => user.questions.length;
const numberOfAnswers = (user) => Object.keys(user.answers).length;

const userRate = (user) => numberOfAsked(user) + numberOfAnswers(user);

export default connect(
    ({users}) => ({
        usersIds: Object.keys(users).sort((a, b) => userRate(users[b]) - userRate(users[a]))
    }),
    (dispatch) => ({

    })
)(UsersList)