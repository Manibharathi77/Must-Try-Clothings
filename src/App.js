import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact= {true} path = '/' component = {HomePage}></Route>
        <Route exact={true} path='/shop' component = {ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
