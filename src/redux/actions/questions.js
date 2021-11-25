import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../../utils/_DATA"
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const NEW_QUESTION = 'NEW_QUESTION';

const getAllQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    payload: questions
})

export const handleGetAllQuestions = () => (dispatch) => {
    dispatch(showLoading());
    _getQuestions()
        .then(questions => {
            dispatch(getAllQuestions(questions));
            dispatch(hideLoading());
        })
        .catch(error => {
            alert('Error Occurred!');
        });
}

const submitAnswer = ({ authedUser, qid, answer }) => ({
    type: SUBMIT_ANSWER,
    payload: {
        authedUser,
        qid,
        answer
    }
})

export const handleSubmitAnswer = (qid, answer) => (dispatch, getState) => {
    const authedUser = getState().authedUser;
    const info = { authedUser, qid, answer };
    _saveQuestionAnswer(info)
        .then(res => {
            dispatch(submitAnswer(info));
        })
        .catch(error => {
            alert('Error Occurredddd!' + error);
        });
}

const addNewQuestion = (formattedQuestion) => ({
    type: NEW_QUESTION,
    payload: formattedQuestion
})

export const handleNewQuestion = (optionOneText, optionTwoText) => (dispatch, getState) => {
    const author = getState().authedUser;
    _saveQuestion({ optionOneText, optionTwoText, author })
        .then(formattedQuestion => {
            dispatch(addNewQuestion(formattedQuestion))
        })
        .catch(error => {
            alert('Error Occurred!');
        });
}