import React from 'react';
import couch from "./img/couch.jpg";

const Wallaper = () => {

    const styles = {
        container: {
            height : '2vh',
        }
        }

    return(
        <div style={styles.container}>
            <img src={couch} style={{height: '100vh', width:'100vw'}}/>
        </div>
    );
    
}

export default Wallaper;