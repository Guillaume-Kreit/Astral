import React from "react";
import Beach from './sub-Thematics/Beach';
import Forest from './sub-Thematics/Forest';
import Mountain from './sub-Thematics/Mountain';
import Desert from './sub-Thematics/Desert';

class Thematics extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            height: '30vh',
            width: '80%',
            margin: '10px',
            backGroundColor: 'yellow',
        },
    }

    render () {
        return (
        <div>
            <p>THEMATICS</p>
            <Forest />
            <Beach />
            <Mountain />
            <Desert />
        </div>
        )
    }
}

export default Thematics
