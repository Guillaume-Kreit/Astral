import React from "react";
import Beach from './sub-Thematics/Beach';
import Forest from './sub-Thematics/Forest';
import Mountain from './sub-Thematics/Mountain';
import Desert from './sub-Thematics/Desert';

class Thematics extends React.Component {

    styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            fontSize : '15px',
            color : 'beige',
            
        },
    }
    
    render () {
        const { 
            showBeachWebcam,
            showMountainWebcam,
            showForestWebcam,
            showIslandWebcam,
        } = this.props

       return(
            <div style={this.styles.container}>
            <Forest showForestWebcam={showForestWebcam} />
            <Beach showBeachWebcam={showBeachWebcam} />
            <Mountain showMountainWebcam={showMountainWebcam} />
            <Desert showIslandWebcam={showIslandWebcam} />

        </div>
        ); 
    }  
}

export default Thematics