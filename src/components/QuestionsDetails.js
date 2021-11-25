import { Component } from 'react';
import { connect } from 'react-redux'
import { handleSubmitAnswer } from '../redux/actions/questions';
import { formatDate } from '../utils/helpers';
import UserCard from './UserCard';

class QuestionDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            optionOne: false,
            optionTwo: false
        }
        this.optionSelected = this.optionSelected.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    componentDidMount() {
    }

    optionSelected(e) {
        e.preventDefault();
        const selectedValue = e.target.value;
        this.setState(curr => ({
            ...curr,
            [selectedValue]: true
        }))
    }

    submitAnswer(e) {
        e.preventDefault();
        const answer = e.target[this.props.qId].value;
        if (answer === '') { alert('select answer'); return; }
        this.props.submitAnswer(this.props.qId, answer);
        // this.props.history.push('/');
    }
    render() {
        if (this.props.msg != null) 
        { 
            this.props.history.push(`/error/${this.props.msg}`);
        }

        return (
            <div className='login-form'>
                <UserCard uId={this.props.authorId}/>
                <form onSubmit={this.submitAnswer} className='container'>
                    <small>{formatDate(this.props.timestamp)}</small>
                    <br/>
                    <label>Would You rather</label>
                    <div>
                        <div className="form-check">
                            <input
                                onChange={this.optionSelected}
                                className="form-check-input my-2"
                                type="radio"
                                name={this.props.qId}
                                value="optionOne"
                                id='optionOne'
                                disabled={this.props.isAnswered}
                                checked={this.state.optionOne}
                            />
                            <label className="form-check-label" htmlFor="optionOne">
                                {this.props.opOneText}
                                {this.props.isAnswered&&
                                    <span className='badge badge-primary mx-2 p-2'> Votes {this.props.opOneVotes} ({this.props.opOnePercent}%)</span>
                            }
                            </label>
                        </div>
                        <div className="form-check my-1">
                            <input
                                onChange={this.optionSelected}
                                className="form-check-input my-2"
                                type="radio"
                                name={this.props.qId}
                                id='optionTwo'
                                value="optionTwo"
                                disabled={this.props.isAnswered}
                                checked={this.state.optionTwo}
                            />
                            <label className="form-check-label" htmlFor="optionTwo">
                                {this.props.opTwoText}
                                {this.props.isAnswered&&
                                    <span className='badge badge-primary mx-2 p-2'> Votes {this.props.opTwoVotes} ({this.props.opTwoPercent}%)</span>
                                }
                            </label>
                        </div>
                    </div>
                    {!(this.props.isAnswered) &&
                        <div className='center'>
                            <button
                                disabled={!this.state.optionOne && !this.state.optionTwo}
                                type='submit'
                                className='btn btn-outline-primary'
                            >Submit Answer</button>
                        </div>
                    }
                </form>

            </div>
        );
    }
}

export default connect(
    ({ questions, authedUser, users }, props) => {
        const qId = props.match.params.question_id;
        const question = questions[qId];
        if(question == null) return {msg : 'Question Not Found'};
        const user = users[authedUser];

        const answer = user.answers[qId];
        const isAnswered = answer != null;

        const timestamp = question.timestamp;
        const authorId = question.author;
        const opOneText = question.optionOne.text;
        const opTwoText = question.optionTwo.text;
        const opOneVotes = question.optionOne.votes.length;
        const opTwoVotes = question.optionTwo.votes.length;
        const numUsers = Object.keys(users).length;
        const opOnePercent = Math.round((opOneVotes / numUsers) * 100);
        const opTwoPercent = Math.round((opTwoVotes / numUsers) * 100);
        return {
            msg:null,
            qId,
            timestamp,
            answer,
            isAnswered,
            authorId,
            opOneText,
            opTwoText,
            opOneVotes,
            opTwoVotes,
            opOnePercent,
            opTwoPercent
        }
    },
    (dispatch) => ({
        submitAnswer: (qId, answer) => {
            dispatch(handleSubmitAnswer(qId, answer))
        }
    })
)(QuestionDetails);