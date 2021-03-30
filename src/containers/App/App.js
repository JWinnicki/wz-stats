import React from 'react';
import {connect} from 'react-redux';
//import axios from 'axios';

//import key from '../../apiKey';
import users from '../../users';
import {fetchHistory} from '../../store/actions';
import './App.module.scss';

const App = ({onFetchHistory}) => {
 /*  const getDetails = async (user, platform) => {
    try {
      //const response = await axios.get(`https://www.callofduty.com/api/papi-client/crm/cod/v2/title/mw/platform/battle/fullMatch/wz/11152770713054164043/it`);
      
      console.log(response.data)
    } catch(error) {
      if(error.response === undefined) {
          console.log('jakis blad')
      } else {
          console.log(error.response.data.message);
      }
    }


  } */

  return (
    <div className="App">
      WZ STATS
      <button onClick={() => onFetchHistory(users[3].tag, users[3].platform)}>LOAD MATCH</button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchHistory: (user, platform) => dispatch(fetchHistory(user, platform))
  }
}

export default connect(null, mapDispatchToProps)(App);
