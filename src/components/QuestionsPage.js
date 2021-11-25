import { Component } from "react"
import { connect } from 'react-redux'
import QuestionsList from "./QuestionsList"

class QuestionsPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            listType: 'unanswered'
        }
        this.changeList = this.changeList.bind(this);
    }
    changeList(e){
        e.preventDefault();
        const selectedTab = e.target.id;
        this.setState({
            listType: selectedTab
        });
    }
    render(){
        return (
            <div className='container'>
                <h3 className='center'>Questions</h3>
                <div className='tab-view' onClick={this.changeList}>
                    <button
                        id='unanswered'
                        className={this.state.listType === 'unanswered' ? 'btn-primary' : 'btn-outline-primary'}
                        >
                        Unanswered
                    </button>
                    <button
                        id='answered'
                        className={this.state.listType === 'answered' ? 'btn-primary' : 'btn-outline-primary'}
                        >
                        Answered
                    </button>
                </div>
                <div>
                    <QuestionsList listType={this.state.listType} />
                </div>
            </div>
        )
    }
}


export default connect()(QuestionsPage)