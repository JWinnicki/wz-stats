import React from 'react';
import {connect} from 'react-redux';
//import axios from 'axios';

//import key from '../../apiKey';
import users from '../../users';
import {fetchHistory, fetchMatchDetails} from '../../store/actions';
import './App.module.scss';

const App = ({onFetchHistory, onFetchMatchDetails}) => {
  return (
    <div className="App">
      WZ STATS
      <button onClick={() => onFetchHistory(users[3].tag, users[3].platform)}>LOAD PROFILE</button>
      <button onClick={onFetchMatchDetails}>LOAD MATCH</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchHistory: (user, platform) => dispatch(fetchHistory(user, platform)),
    onFetchMatchDetails: () => dispatch(fetchMatchDetails())
  }
}

export default connect(null, mapDispatchToProps)(App);
