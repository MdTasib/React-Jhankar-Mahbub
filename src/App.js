import './App.css';
import { useState } from 'react';
import RouterComponent from './Components/Friends/Route';
import CountryRoute from './Components/Country/CountryRoute';
import State from './Components/State/State';
import Context from './Components/Context/Context';
import BasicRoute from './Components/Route/Route';
import Data from './Components/MultipleDataLoad/Data';
import Map from './Components/GoogleMap/Map';
import Direction from './Components/GoogleMap/Direction';
import Hello from './Components/SASS/Hello';
import Home from './Components/ClassComponent/Home';
import ExploreRef from './Components/Hooks/ExploreRef';
import ReducerCount from './Components/Hooks/ReducerCount/ReducerCount';
import PatientManagement from './Components/Hooks/PatientManagement/PatientManagement';
import Route from './Components/Route/Basic-Router/Route';
import MaterialUi from './Components/Material-Ui/MaterialUi';
import Stripe from './Components/Stripe/Stripe';


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
      {/* <ExploreRef /> */}
      {/* <ReducerCount />
      <PatientManagement /> */}
      {/* <Route /> */}
      {/* <MaterialUi /> */}

      <Stripe />
    </div>
  )
}
export default App;