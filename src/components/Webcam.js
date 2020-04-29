import React from "react";
import axios from 'axios';

class Webcam extends React.Component {
    state = {
        isActive: true,
        id: '1010243760',
        category: '',
        src: '',
    }

    styles = {
        container: {
            display: 'flex',
            height: '90vh',
            width: '90%',
            margin: '0px',
            border: '10px',
            position: 'absolut',
        },
    }

    showBeachWebcam = () => {
        this.setState({ category : 'beach' })
        
        axios
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
          })
          .catch(err => {
              console.log(err.message)
          })
    }

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
        </div>
        )
    }
}

export default Webcam