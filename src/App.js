import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Home/Navigation';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/Home/Home';


//232C34
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
     
    <Home/>
    
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
