import React from "react";
import Webcam from './Webcam';


class YogaSession extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            height: '100vh',
            width: '100%',
            margin: '0px',
        },
    }

    render () {
        return (
        <div style={this.styles.container} >
            <Webcam {...this.props}/>
        </div>
        )
    }
}

export default YogaSession