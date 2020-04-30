import React from "react";
import Beach from './sub-Thematics/Beach';
import Forest from './sub-Thematics/Forest';
import Mountain from './sub-Thematics/Mountain';
import Desert from './sub-Thematics/Desert';

const Thematics = () => {

    const styles = {
        container: {
            display: 'flex',
        },

        cadre : {
            
            fontSize : '40px',
            marginLeft : '15%',
            width : '25%',
            color : 'white',
            
        }

    }

    return(
        <div style={styles.container}>
        <p style={styles.cadre}>THEMATICS</p>
        <Forest />
        <Beach />
        <Mountain />
        <Desert />
        </div>
    );
}

export default Thematics