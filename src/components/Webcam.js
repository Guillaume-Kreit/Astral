import React from "react";
import axios from 'axios';

class Webcam extends React.Component {
    state = {
        isActive: true,
        category: '',
        src: '',
    }

    styles = {
        container: {
            display: 'flex',
            height: '100vh',
            width: '100%',
            margin: '0px',
            border: '10px',
            position: 'absolut',
            background: 'blue',
        },
    }

    showBeachWebcam = () => {
        this.setState({ category : 'beach' })
        
        axios
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
          })
          .catch(err => {
              console.log(err.message)
          })
    }

    render () {
        return (
        <div style={this.styles.container} onClick={this.showBeachWebcam}>
        </div>
        )
    }
}

export default Webcam