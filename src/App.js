import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Home/Navigation';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


//232C34
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
     
     <Navigation/>
    
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
