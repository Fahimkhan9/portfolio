import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Home/Navigation';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { useState } from 'react';


//232C34
function App() {
  const [cart,setCart] = useState([])
  const addtocart =(id) => {


    setCart([...cart,id])
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


      </Switch>
    </Router>
   
  );
}

export default App;
