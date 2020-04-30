import React from "react";
import FiveMinuts from "./sub-Timer/FiveMinuts";
import TenMinuts from "./sub-Timer/TenMinuts";

const Timer = () => {

    const styles = {
        container: {
            display: 'flex',
            fontSize : '40px',
            marginLeft : '15%',
            color : 'white',
        }
        }

    return(
        <div >
        <p style={styles.container}>Time</p>
            <FiveMinuts />
            <TenMinuts />
        </div>
    );
}

export default Timer