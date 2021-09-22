import * as actionTypes from './BrainGymTypes';

const initialState = {
    Allgym: [],
    totalCoin: 0,
    chestData: {},
    masterBrainGym: [],
    questionByTag: [],
    attempQuestion: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_CHEST_DATA:
            return {
                ...state,
                chestData: action.payload,
            };
        case actionTypes.UPDATE_MASTER_BRAIN_GYM_BY_ID:
            return {
                ...state,
                masterBrainGym: action.payload,
            };

        case actionTypes.UPDATE_QUESTION_BY_TAG:
            return {
                ...state,
                questionByTag: action.payload,
            };

        case actionTypes.UPDATE_ATTEMPT_QUESTION:
            return {
                ...state,
                attempQuestion: action.attempt_que,

            };

        case actionTypes.GET_USERS_FAILED:
            return {
                ...state,
                error: action.message,
            };
        case actionTypes.SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return { ...state };
    }
}
