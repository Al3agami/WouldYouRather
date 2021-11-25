import { NEW_QUESTION, SUBMIT_ANSWER } from "../actions/questions";
import { RECEIVE_USERS } from "../actions/users";


export const users = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case RECEIVE_USERS:
            {
                return {...payload }
            }
        case SUBMIT_ANSWER:
            {
                return {
                    ...state,
                    [payload.authedUser]: {
                        ...state[payload.authedUser],
                        answers: {
                            ...state[payload.authedUser].answers,
                            [payload.qid]: [payload.answer]
                        }
                    }
                }
            }
        case NEW_QUESTION:
            {
                return {
                    ...state,
                    [payload.author]: {
                        ...state[payload.author],
                        questions: state[payload.author].questions.concat([payload.id])
                    }
                }
            }
        default:
            return state;
    }
}