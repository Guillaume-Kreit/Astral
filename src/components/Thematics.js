import React from "react";
import Beach from './sub-Thematics/Beach';
import Forest from './sub-Thematics/Forest';
import Mountain from './sub-Thematics/Mountain';
import Desert from './sub-Thematics/Desert';


const Thematics = () => {

    const styles = {
        container: {
            display: 'flex',
            fontSize : '40px',
            marginLeft : '15%',
            backGroundColor: 'yellow',
        }
        }

    return(
        <div >
        <p style={styles.container}>THEMATICS</p>
        <Forest />
        <Beach />
        <Mountain />
        <Desert />
        </div>
    );
    
}

export default Thematics
