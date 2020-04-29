import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import YogaRoom from './components/YogaRoom';
import Start from './components/Start';
import Thematics from './components/Thematics';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/YogaRoom" component={YogaRoom} />
          <Route path="/Start" component={Start} />
          <Route path="/Thematis" component={Thematics} />
        </Switch>

      </header>

    </div>
  );
}

export default App;
