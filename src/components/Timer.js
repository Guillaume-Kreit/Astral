import React from "react";
import FiveMinuts from "./sub-Timer/FiveMinuts";
import TenMinuts from "./sub-Timer/TenMinuts";

const Timer = () => {

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            fontSize : '20px',
            color : 'white',
            
        },
    }

    return(
        <div style={styles.container}>
        
            <FiveMinuts />
            <TenMinuts />
        
        </div>
    );
}

export default Timer