import React from "react";
import Beach from './sub-Thematics/Beach';
import Forest from './sub-Thematics/Forest';
import Mountain from './sub-Thematics/Mountain';
import Desert from './sub-Thematics/Desert';

class Thematics extends React.Component {

    styles = {
        container: {
            display: 'flex',
        },

        cadre : {
            
            fontSize : '40px',
            marginLeft : '15%',
            width : '25%',
            color : 'white',
            
        }
    
    render () {
        const { 
            showBeachWebcam,
            showMountainWebcam,
            showForestWebcam,
            showIslandWebcam,
        } = this.props

       return(
            <div style={styles.container}>
            <p style={styles.cadre}>THEMATICS</p>
            <Forest onClick={showBeachWebcam} />
            <Beach onClick={showMountainWebcam} />
            <Mountain onClick={showForestWebcam} />
            <Desert onClick={showIslandWebcam} />

        </div>
        ); 
    }  
}

export default Thematics