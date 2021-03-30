import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    matchDetails: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_MATCH_DETAILS_START:
            return {
                ...state,
                matchDetails: []
            }
        case actionTypes.FETCH_MATCH_DETAILS_SUCCESS:
            return {
                ...state,
                matchDetails: action.matchDetails
            }
        default: 
            return state
    }
    
};
export default reducer;