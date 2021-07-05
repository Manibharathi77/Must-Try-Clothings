import './App.css';
import HomePage from './pages/homepage/homepage.component'

import {Switch, Route} from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      <h1> Hats Page is working!! </h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact= {true} path = '/' component = {HomePage}></Route>
        <Route exact= {true} path = '/shop/hats' component = {HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
