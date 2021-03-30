import { combineReducers } from 'redux';

import appStateReducer from './appStateReducer';
import matchDetailsReducer from './matchDetailsReducer';
import gamesHistoryReducer from './gamesHistoryReducer';
import accStatsReducer from './accStatsReducer';

export default combineReducers({
    appState: appStateReducer,
    accStats: accStatsReducer,
    matchDetails: matchDetailsReducer,
    gamesHistory: gamesHistoryReducer
});