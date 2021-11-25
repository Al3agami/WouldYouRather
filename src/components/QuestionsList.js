import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'

const QuestionsList = (props) => {
    return (
        <div>
            <ul>
                {props.questionsIds.map(qId => <QuestionCard key={qId} qId={qId}/>)}
            </ul>
        </div>
    )
}

export default connect(
    ({ questions, users, authedUser }, { listType }) => {
        const user = users[authedUser];
        const answredIds = Object.keys(user.answers);
        let questionsIds = Object.keys(questions);
        questionsIds = listType === 'answered' ? 
                questionsIds.filter(q => answredIds.includes(q)).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
                : questionsIds.filter(q => !answredIds.includes(q)).sort((a, b) => questions[b].timestamp - questions[a].timestamp);
        return {
            questionsIds
        }
    }
)(QuestionsList)