import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Home/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import OrderComplete from "./components/OrderComplete/OrderComplete";

//232C34
function App() {
  const [productquantity,setProductquantity] = useState(1)
  const [cart, setCart] = useState([]);
  const [totalamount, setTotalamount] = useState([]);
  const [orderdata,setOrderdata] = useState()

  const addtocart = (cartdata, quantity) => {
    setCart([...cart, cartdata]);
    setTotalamount([
      ...totalamount,
      parseFloat(cartdata.price.slice(1)) * quantity,
    ]);
    console.log(parseFloat(cartdata.price.slice(1)));
  };
  // console.log(cart.length, 'length');
  console.log(cart,"app");
  console.log(totalamount);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home cart={cart} />
        </Route>
        <Route exact path="/productdetail/:id">
          <ProductDetail productquantity={productquantity} setProductquantity={setProductquantity} addtocart={addtocart} />
        </Route>
        <Route exact path="/checkout">
          <Checkout productquantity={productquantity} cart={cart} totalamount={totalamount} orderdata={orderdata} setOrderdata={setOrderdata} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/order-complete">
          <OrderComplete orderdata={orderdata}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
