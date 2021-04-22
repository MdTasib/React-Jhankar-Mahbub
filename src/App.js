import './App.css';
import RouterComponent from './Components/Friends/Route';
import CountryRoute from './Components/Country/CountryRoute';
import State from './Components/State/State';
import Context from './Components/Context/Context';
import BasicRoute from './Components/Route/Route';
import Data from './Components/MultipleDataLoad/Data';
import Map from './Components/GoogleMap/Map';
import Direction from './Components/GoogleMap/Direction';
import { useState } from 'react';
import Hello from './Components/SASS/Hello';
import Home from './Components/ClassComponent/Home';
import ExploreRef from './Components/Hooks/ExploreRef';


function App() {
  // useing map
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');


  return (
    <div className='App'>
      {/* <RouterComponent /> */}

      {/* <CountryRoute /> */}

      {/* <State /> */}

      {/* <Context /> */}

      {/* <BasicRoute /> */}

      {/* <Data /> */}
      {/* <Map/> */}

      {/* <input type="text" placeholder='Origin' onBlur={e => setOrigin(e.target.value)} />
      <input type="text" placeholder='Destination' onBlur={e => setDestination(e.target.value)} />
      <Direction origin={origin} destination={destination} /> */}
      {/* <Hello /> */}
      {/* <Home /> */}
      <ExploreRef />
    </div>
  )
}
export default App;
