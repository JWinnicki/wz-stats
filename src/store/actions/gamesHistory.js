import axios from 'axios';

import * as actionTypes from './actionTypes';
import key from '../../apiKey';

export const fetchHistoryStart = () => {
    return {
        type: actionTypes.FETCH_HISTORY_START
    }
}

export const fetchHistoryFail = errorMsg => {
    return {
        type: actionTypes.FETCH_HISTORY_FAIL,
        errorMsg: errorMsg
    }
}

export const fetchHistorySuccess = gamesHistory => {
    return {
        type: actionTypes.FETCH_HISTORY_SUCCESS,
        gamesHistory: gamesHistory
    }
}

export const fetchHistory = (user, platform) => {
    return async dispatch => {
        dispatch(fetchHistoryStart());
        const options = {
            method: 'GET',
            url: `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/${user}/${platform}`,
            headers: {
              'x-rapidapi-key': key,
              'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            console.log(response.data);
            dispatch(fetchHistorySuccess(response.data));
        } catch(error) {
            if(error.response === undefined) {
                console.log('Something went wrong.')
                dispatch(fetchHistoryFail('Something went wrong.'))
            } else {
                console.log(error.response.data.message);
                dispatch(fetchHistoryFail(error.response.data.message))
            }
        }
    }
}