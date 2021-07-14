import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in/sign-in-and-sign-up.compent';

import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact= {true} path = '/' component = {HomePage}></Route>
        <Route exact={true} path='/shop' component = {ShopPage}></Route>
        <Route exact={true} path='/sign-in' component = {SignInAndSignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
