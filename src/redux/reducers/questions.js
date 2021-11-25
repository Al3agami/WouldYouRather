import { USER_LOGOUT } from "../actions/login";
import { NEW_QUESTION, RECEIVE_QUESTIONS, SUBMIT_ANSWER } from "../actions/questions";

export const questions = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case RECEIVE_QUESTIONS:
            {
                return {...payload }
            }
        case SUBMIT_ANSWER:
            {
                return {
                    ...state,
                    [payload.qid]: {
                        ...state[payload.qid],
                        [payload.answer]: {
                            ...state[payload.qid][payload.answer],
                            votes: state[payload.qid][payload.answer].votes.concat([payload.authedUser])
                        }
                    }
                }
            }
        case NEW_QUESTION:
            {
                return {
                    ...state,
                    [payload.id]: payload
                }
            }
        case USER_LOGOUT:
            {
                return {}
            }
        default:
            return state;
    }
}