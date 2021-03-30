import * as actionTypes from '../actions/actionTypes';

export const initialState = {
    loading: false,
    error: false,
    errorMsg: null,
    historyFetched: false,
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_HISTORY_START:
            return {
                ...state,
                loading: true,
                error: false,
                errorMsg: null,
                historyFetched: false,
            }
        case actionTypes.FETCH_HISTORY_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.errorMsg
            }
        case actionTypes.FETCH_HISTORY_SUCCESS:
            return {
                ...state,
                loading: false,
                historyFetched: true,
            }
        case actionTypes.FETCH_MATCH_DETAILS_START:
            return {
                ...state,
                loading: true,
                error: false,
                errorMsg: null,
                matchDetailsFetched: false,
            }
        case actionTypes.FETCH_MATCH_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.errorMsg
            }
        case actionTypes.FETCH_MATCH_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                matchDetailsFetched: true,
            }
        default: 
            return state
    }
};

export default reducer;