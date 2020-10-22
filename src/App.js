import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Home/Navigation';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { useState } from 'react';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';


//232C34
function App() {
  const [cart,setCart] = useState([])
  const addtocart =(id) => {

  

    setCart(() => [...cart,id])
        }
        console.log(cart);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
     
    <Home/>
    
        </Route>
        <Route exact path="/productdetail/:id" >
<ProductDetail addtocart={addtocart}/>
        </Route>
<Route exact path="/checkout">
  <Checkout cart={cart}/>
</Route>
<Route exact path='/login'>
  <Login/>
</Route>

      </Switch>
    </Router>
   
  );
}

export default App;
