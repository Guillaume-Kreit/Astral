import React from 'react';
import './App.css';
import YogaRoom from './components/YogaRoom';
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
      <Route exact path="/" component={YogaRoom} />
      <Route path="/game/:gameID" component={GameInfo} />
    </Switch>

      </header>

    </div>
  );
}

export default App;
