import React from 'react';
import './App.css';
import About from './About';
import Nav from './Nav';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:url" exact component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
  return(
    <div>
        <h1>Home Page</h1>
    </div>
  )
}

export default App;
