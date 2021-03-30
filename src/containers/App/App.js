import React from 'react';
import axios from 'axios';

import key from '../../apiKey';
import users from '../../users';
import './App.module.scss';

const App = () => {

  const getDetails = async (user, platform) => {
    const options = {
      method: 'GET',
      url: `https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches/${user}/${platform}`,
      headers: {
        'x-rapidapi-key': key,
        'x-rapidapi-host': 'call-of-duty-modern-warfare.p.rapidapi.com'
      }
    };
    try {
      //const response = await axios.get(`https://www.callofduty.com/api/papi-client/crm/cod/v2/title/mw/platform/battle/fullMatch/wz/11152770713054164043/it`);
      const response2 = await axios.request(options);
      //console.log(response.data)
      console.log(response2.data)
    } catch(error) {
      if(error.response2 === undefined) {
          console.log('jakis blad')
      } else {
          //console.log(error.response.data.message);
          console.log(error.response2.data.message);
      }
    }


  }

  return (
    <div className="App">
      WZ STATS
      <button onClick={() => getDetails(users[1].tag, users[1].platform)}>LOAD MATCH</button>
    </div>
  );
}

export default App;
