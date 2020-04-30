import React from 'react';
import relax2 from "./img/relax2.jpg";

const Wallaper = () => {

    const styles = {
        container: {
            height : '2vh',
        }
        }

    return(
        <div style={styles.container}>
            <img src={relax2} style={{height: '100vh', width:'100vw'}}/>
        </div>
    );
    
}

export default Wallaper;