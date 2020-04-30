import React from "react";
import Webcam from './Webcam';
import Song from "./Song";
import './YogaSession.css';


class YogaSession extends React.Component {  
    styles = {
        containerBox: {
            display: 'flex',
            height: '100vh',
            width: '100%',
            margin: '0px',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }

    render () {
        return (
        <div style={this.styles.containerBox} >
            <div style={{position:'absolute', top:'30%'}}> 
                <div className="container">
                    <div className="circle" />
                </div>
            </div>
            <Webcam {...this.props}/>
            <Song/>
        </div>
        )
    }
}

export default YogaSession