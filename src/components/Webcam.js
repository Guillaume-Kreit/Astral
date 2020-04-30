import React from "react";

class Webcam extends React.Component {

    styles = {
        container: {
            display: 'block',
            height: '100vh',
            width: '100vw',
            margin: '0px',
            border: '10px',
        },
    }
    
    render () {

        return (
            <iframe id={this.props.id} src={"https://webcams.windy.com/webcams/public/embed/player/"+this.props.id+"/day"} style={this.styles.container}>
            </iframe>
        )
    }
}

export default Webcam