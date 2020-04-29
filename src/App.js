import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import YogaRoom from './components/YogaRoom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/YogaRoom" component={YogaRoom} />
        </Switch>

      </header>
    </div>
  );
}

export default App;
