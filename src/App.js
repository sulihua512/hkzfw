import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CityList from './pages/CityList';
import Map from './pages/Map';
import NotFound from './pages/Nofound';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <Link to="/home">Home</Link>
          <Link to="/citylist">CityList</Link>
          <Link to="/map">Map</Link>
        </div>

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/citylist" component={CityList} />
          <Route path="/map" component={Map} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
