import React from 'react';
import wallaper from "./img/couch.jpg";

const Wallaper2 = () => {

    const styles = {
        container: {
            height : '2vh',
        }
        }

    return(
        <div style={styles.container}>
            <img src={wallaper} style={{height: '100vh', width:'100vw'}}/>
        </div>
    );
    
}

export default Wallaper2;