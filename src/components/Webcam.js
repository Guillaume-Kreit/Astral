import React from "react";

class Webcam extends React.Component {

    styles = {
        container: {
            display: 'flex',
            height: '100vh',
            width: '100vw',
            margin: '0px',
            border: '10px',
        },
    }
    
    render () {

        return (
            <iframe src={"https://webcams.windy.com/webcams/public/embed/player/"+this.props.id+"/lifetime"} style={this.styles.container}>
            </iframe>
        )
    }
}

export default Webcam