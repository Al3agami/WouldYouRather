import { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers';


class QuestionCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            optionOne: false,
            optionTwo: false
        }
        this.openQuestion = this.openQuestion.bind(this);
    }

    componentDidMount(){
        const {answer, isAnswered } = this.props;
        if(isAnswered){
            this.setState(curr => ({
                ...curr,
                [answer] : true
            }));
        }
    }

    openQuestion(e){
        e.preventDefault();
        this.props.history.push(`/questions/${this.props.question.id}`);
        // this.props.history.push(`/questions/asd`);
    }

    render(){
        return (
            <li className='card my-2'>
                <div className='container'>
                    <form className='row'>
                        <small className='col-12'>{formatDate(this.props.question.timestamp)}</small>
                        <label className='col-12'>Would You rather</label>
                        <div className='col-12'>
                            <div className="form-check">
                                {this.state.optionOne && 
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={this.props.question.id}
                                        value="optionOne"
                                        id='optionOne'
                                        readOnly={true}
                                        checked={this.state.optionOne}
                                        />}
                                
                                <label className="form-check-label" htmlFor="optionOne">
                                    {this.props.question.optionOne.text} 
                                    {this.props.isAnswered &&
                                        <small className='text-secondary'>  ({this.props.question.optionOne.votes.length} votes)</small>
                                    }
                                </label>
                            </div>
                            <div className="form-check">
                                {this.state.optionTwo && 
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={this.props.question.id}
                                        id='optionTwo'
                                        value="optionTwo"
                                        readOnly={true}
                                        checked={this.state.optionTwo}
                                    /> }
                                
                                <label className="form-check-label" htmlFor="optionTwo">
                                    {this.props.question.optionTwo.text}
                                    {this.props.isAnswered &&
                                        <small className='text-secondary'>  ({this.props.question.optionTwo.votes.length} votes)</small>
                                    }
                                </label>
                            </div>
                        </div>
                        <div className='col-12 center'>
                            <button
                                onClick={this.openQuestion}
                                type='submit'
                                className='btn btn-outline-primary'
                            >Details</button>
                        </div>
                    </form>

                </div>
            </li>
        )
    }
}


export default withRouter(connect(
    ({ questions, authedUser, users }, { qId }) => {
        const question = questions[qId];
        const user = users[authedUser];
        const answer = user.answers[qId];
        const isAnswered = answer != null;
        return {
            question,
            answer,
            isAnswered
        }
    }
)(QuestionCard))