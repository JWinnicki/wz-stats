import axios from 'axios';

import * as actionTypes from './actionTypes';

export const fetchMatchDetailsStart = () => {
    return {
        type: actionTypes.FETCH_MATCH_DETAILS_START
    }
}

export const fetchMatchDetailsFail = errorMsg => {
    return {
        type: actionTypes.FETCH_MATCH_DETAILS_FAIL,
        errorMsg: errorMsg
    }
}

export const fetchMatchDetailsSuccess = matchDetails => {
    return {
        type: actionTypes.FETCH_MATCH_DETAILS_SUCCESS,
        matchDetails: matchDetails
    }
}

export const fetchMatchDetails = () => {
    return async dispatch => {
        dispatch(fetchMatchDetailsStart());
        try {
            const response = await axios.get(`https://www.callofduty.com/api/papi-client/crm/cod/v2/title/mw/platform/battle/fullMatch/wz/11152770713054164043/it`);
            console.log(response.data.data.allPlayers);
            dispatch(fetchMatchDetailsSuccess(response.data.data.allPlayers));
        } catch(error) {
            if(error.response === undefined) {
                console.log('Something went wrong.')
                dispatch(fetchMatchDetailsFail('Something went wrong.'))
            } else {
                console.log(error.response.data.message);
                dispatch(fetchMatchDetailsFail(error.response.data.message))
            }
        }
    }
}

//`https://www.callofduty.com/api/papi-client/crm/cod/v2/title/mw/platform/battle/fullMatch/wz/11152770713054164043/it`
//https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/JayJay%252322512/profile/type/mp
//https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/uno/gamer/8228177545667834429/profile/type/wz