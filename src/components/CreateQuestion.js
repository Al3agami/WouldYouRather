import { Component } from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleNewQuestion } from "../redux/actions/questions";

class CreateQuestion extends Component{
    constructor(props){
        super(props);
        this.state = {
            optionOneTxt: '',
            optionTwoTxt: '',
            backToQuestions: false
        }
        this.addQuestion = this.addQuestion.bind(this);
        this.textChange = this.textChange.bind(this);
    }

    addQuestion(e){
        e.preventDefault();
        this.props.addNewQuestion(this.state.optionOneTxt, this.state.optionTwoTxt);
        this.setState(curr => ({ ...curr, backToQuestions: true}));
    }

    textChange(e){
        e.preventDefault();
        const id = e.target.id;
        const txt = e.target.value;
        this.setState(curr => ({
            ...curr,
            [id]: txt
        }));
    }

    render(){
        if(this.state.backToQuestions) { return <Redirect to='/'/> } 
        return(
            <div className='container'>
                <h3 className='center'>Create New Question</h3>
                <form className='container' onSubmit={this.addQuestion}>
                    <h3>Would You rather</h3>
                    <div className="form-group">
                        <label htmlFor="optionOne">Option One</label>
                        <input
                            onChange={this.textChange}
                            value={this.state.optionOneTxt}
                            type="text"
                            className="form-control"
                            id="optionOneTxt"
                            placeholder="Coffee"
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="optionTwo">Option Two</label>
                        <input
                            onChange={this.textChange}
                            value={this.state.optionTwoTxt}
                            type="text"
                            className="form-control"
                            id="optionTwoTxt"
                            placeholder="Tea"
                            />
                    </div>
                    <div className='center'>
                        <button type="submit" className="center btn btn-primary">Add Question</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(
    (state) => ({

    }),
    (dispatch) => ({
        addNewQuestion:(optionOne, optionTwo)=>{
            dispatch(handleNewQuestion(optionOne, optionTwo))
        }
    })
)(CreateQuestion)