import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Home/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";

//232C34
function App() {
  const [cart, setCart] = useState([]);
  const [totalamount, setTotalamount] = useState([]);

  const addtocart = (cartdata, quantity) => {
    setCart([...cart, cartdata]);
    setTotalamount([
      ...totalamount,
      parseFloat(cartdata.price.slice(1)) * quantity,
    ]);
    console.log(parseFloat(cartdata.price.slice(1)));
  };
  console.log(cart);
  console.log(totalamount);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home cart={cart} />
        </Route>
        <Route exact path="/productdetail/:id">
          <ProductDetail addtocart={addtocart} />
        </Route>
        <Route exact path="/checkout">
          <Checkout cart={cart} totalamount={totalamount} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
