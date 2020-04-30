import React from "react";
import FiveMinuts from "./sub-Timer/FiveMinuts";
import TenMinuts from "./sub-Timer/TenMinuts";

const Timer = () => {

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
        <p style={styles.cadre}>TIME</p>
            <FiveMinuts />
            <TenMinuts />
        </div>
    );
}

export default Timer