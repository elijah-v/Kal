import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Calculator from './Components/Calculator';
import { useStateValue } from './StateProvider';
import CalorieSum from './Components/CalorieSum';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from './Components/Onboarding';


const App = ()=>{
  const [{calories}]= useStateValue();
  return(
  <Router>
  <div className='app'>
    <Switch>

  <Route path='/calculator'>
    <Nav calories={calories}/>
    <Calculator />
  </Route>

  <Route path='/caloric intake'>
    <Nav calories={calories}/>
    <CalorieSum ingredient='Pizza'/>
  </Route>

  <Route path='/'>
    <Nav calories={calories}/>
    <Onboarding/>
  </Route>

  </Switch>
  </div>
  </Router>
  )
};

export default App;