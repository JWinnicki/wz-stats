import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    gamesHistory: [],
    recentStats: {}
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_HISTORY_START:
            return {
                ...state,
                gamesHistory: {},
                recentStats: {}
            }
        case actionTypes.FETCH_HISTORY_SUCCESS:
            return {
                ...state,
                gamesHistory: action.gamesHistory.matches,
                recentStats: action.gamesHistory.summary
            }
        default: 
            return state
    }
};

export default reducer;