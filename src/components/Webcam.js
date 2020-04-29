import React from "react";
import axios from 'axios';

class Webcam extends React.Component {
    state = {
        isActive: true,
<<<<<<< dev
        id: '1010243760',
=======
>>>>>>> ajout du composant Webcam
        category: '',
        src: '',
    }

    styles = {
        container: {
            display: 'flex',
<<<<<<< dev
            height: '90vh',
            width: '90%',
            margin: '0px',
            border: '10px',
            position: 'absolut',
=======
            height: '100vh',
            width: '100%',
            margin: '0px',
            border: '10px',
            position: 'absolut',
            background: 'blue',
>>>>>>> ajout du composant Webcam
        },
    }

    showBeachWebcam = () => {
        this.setState({ category : 'beach' })
        
        axios
<<<<<<< dev
          .get('https://api.windy.com/api/webcams/v2/list/?key=20FwpHPZeZxGaR9V4acnJGDG0r5kTh04', {
              method: 'get',
            })
          .then(res => {
            console.log(res.data.result.webcams[0].id)
                this.setState({
                    isActive: true,
                    id: res.data.result.webcams[0].id,
                    });
          })
          .catch(err => {
              console.log(err.message)
          })
    }

    showMountainWebcam = () => {
        this.setState({ category : 'mountain' })
        
        axios
          .get('https://api.windy.com/api/webcams/v2/list/category=mountain?key=20FwpHPZeZxGaR9V4acnJGDG0r5kTh04', {
              method: 'get',
            })
          .then(res => {
            console.log(res.data.result.webcams[0].id)
                this.setState({
                    isActive: true,
                    id: res.data.result.webcams[0].id,
                    });
=======
          .get('https://api.windy.com/api/webcams/v2/list/webcam=1259146823?show=webcams:image,location,player', {
              method: 'get',
              headers: {
                "x-windy-key": "20FwpHPZeZxGaR9V4acnJGDG0r5kTh04"
              }
          })
          .then(res => {
            console.log(res.data)
            console.log('HELLO')
            console.log(res.data.result.webcams[0].player.lifetime.embed)
                this.setState({
                isActive: true,
                src: ""
                });
>>>>>>> ajout du composant Webcam
          })
          .catch(err => {
              console.log(err.message)
          })
    }

<<<<<<< dev
    showForestWebcam = () => {
        this.setState({ category : 'forest' })
        
        axios
          .get('https://api.windy.com/api/webcams/v2/list/category=forest?key=20FwpHPZeZxGaR9V4acnJGDG0r5kTh04', {
              method: 'get',
            })
          .then(res => {
            console.log(res.data.result.webcams[0].id)
                this.setState({
                    isActive: true,
                    id: res.data.result.webcams[0].id,
                    });
          })
          .catch(err => {
              console.log(err.message)
          })
    }

    showIslandWebcam = () => {
        this.setState({ category : 'island' })
        
        axios
          .get('https://api.windy.com/api/webcams/v2/list/category=island?key=20FwpHPZeZxGaR9V4acnJGDG0r5kTh04', {
              method: 'get',
            })
          .then(res => {
            console.log(res.data.result.webcams[0].id)
                this.setState({
                    isActive: true,
                    id: res.data.result.webcams[0].id,
                    });
          })
          .catch(err => {
              console.log(err.message)
          })
    }
    
    render () {
        return (
        <div>
            <div>
                <button onClick={this.showBeachWebcam}>BEACH</button>
                <button onClick={this.showMountainWebcam}>MOUNTAIN</button>
                <button onClick={this.showForestWebcam}>FOREST</button>
                <button onClick={this.showIslandWebcam}>ISLAND</button>
            </div>
            <iframe src={"https://webcams.windy.com/webcams/public/embed/player/"+this.state.id+"/lifetime"} style={this.styles.container}>
            </iframe>
=======
    render () {
        return (
        <div style={this.styles.container} onClick={this.showBeachWebcam}>
>>>>>>> ajout du composant Webcam
        </div>
        )
    }
}

export default Webcam