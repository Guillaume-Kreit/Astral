import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import YogaRoom from './components/YogaRoom';
import HomePage from './components/HomePage';
import YogaSession from './components/YogaSession';
import axios from 'axios';

class App extends React.Component {

  state = {
    isActive: true,
    id: '',
    category: '',
  }

  showBeachWebcam = () => {
    console.log('BEACH')
    this.setState({ 
      category : 'beach'
      })
      
    axios
      .get('https://api.windy.com/api/webcams/v2/list/category=beach/property=hd?key=20FwpHPZeZxGaR9V4acnJGDG0r5kTh04', {
        method: 'get',
        })
        .then(res => {
          console.log(res.data.result.webcams[0].id)
          this.setState({
            isActive: true,
            id: '1404370895',
            });
        })
        .catch(err => {
            console.log(err.message)
        })
  }

  showMountainWebcam = () => {
    this.setState({ category : 'mountain' })
      
    axios
        .get('https://api.windy.com/api/webcams/v2/list/category=mountain/property=hd?key=20FwpHPZeZxGaR9V4acnJGDG0r5kTh04', {
            method: 'get',
          })
        .then(res => {
          console.log(res.data.result.webcams[0].id)
              this.setState({
                  isActive: true,
                  id: '1558347165',
                  });
        })
        .catch(err => {
            console.log(err.message)
        })
  }

  showForestWebcam = () => {
      this.setState({ category : 'forest' })
      
      axios
        .get('https://api.windy.com/api/webcams/v2/list/category=forest/property=hd?key=20FwpHPZeZxGaR9V4acnJGDG0r5kTh04', {
            method: 'get',
          })
        .then(res => {
          console.log(res.data.result.webcams[0].id)
              this.setState({
                  isActive: true,
                  id: '1426155608',
                  });
        })
        .catch(err => {
            console.log(err.message)
        })
  }

  showIslandWebcam = () => {
      this.setState({ category : 'island' })
      
      axios
        .get('https://api.windy.com/api/webcams/v2/list/category=island/property=hd?key=20FwpHPZeZxGaR9V4acnJGDG0r5kTh04', {
            method: 'get',
          })
        .then(res => {
          console.log(res.data.result.webcams[0].id)
              this.setState({
                  isActive: true,
                  id: '1389873833',
                  });
        })
        .catch(err => {
            console.log(err.message)
        })
  }

  render () {

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
              path="/MeditationRoom"
              render={props => {
                return (
                  <YogaRoom
                    showBeachWebcam={this.showBeachWebcam}
                    showMountainWebcam ={this.showMountainWebcam}
                    showForestWebcam ={this.showForestWebcam}
                    showIslandWebcam={this.showIslandWebcam}
                    {...this.state}
                  />)
              }} />
          <Route 
              path="/MeditationSession" 
              render={props => {
                return (
                  <YogaSession
                  {...this.state}
                 />)
              }} />
        </Switch>
      </header>
    </div>
  );
  }
}

export default App; 
