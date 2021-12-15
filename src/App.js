import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Navmenu from './components/Navmenu'
import Category from './components/Category'
import Home from './components/Home'
import Shopcart from './components/Shopcart'
import Loginpage from './components/Loginpage'



function App() {
  return (
    <>
        <Route path="/signin"><Loginpage/></Route>
        <Navmenu/>
        <Switch>
            <Route path="/" exact ><Home/></Route>
            <Route path="/category/:ctID" exact><Category/></Route>
            <Route path="/shopcart" exact><Shopcart/></Route>
        </Switch>
    </>
  );
}

export default App;

