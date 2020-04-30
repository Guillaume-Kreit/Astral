import React from "react";
import Beach from './sub-Thematics/Beach';
import Forest from './sub-Thematics/Forest';
import Mountain from './sub-Thematics/Mountain';
import Desert from './sub-Thematics/Desert';

class Thematics extends React.Component {

    styles = {
        container: {
            display: 'flex',
            fontSize : '40px',
            marginLeft : '15%',
            backGroundColor: 'yellow',
        }
        }
    
    render () {
        const { 
            showBeachWebcam,
            showMountainWebcam,
            showForestWebcam,
            showIslandWebcam,
        } = this.props

       return(
        <div >
            <p>THEMATICS</p>
            <Forest onClic={showBeachWebcam} />
            <Beach onClic={showMountainWebcam} />
            <Mountain onClic={showForestWebcam} />
            <Desert onClic={showIslandWebcam} />
        </div>
        ); 
    }

    
}

export default Thematics