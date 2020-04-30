import React from 'react';
import zen from "./img/zen.jpg";

const Wallaper = () => {

    const styles = {
        container: {
            height : '2vh',
        }
        }

    return(
        <div style={styles.container}>
            <img src={zen} />
        </div>
    );
    
}

export default Wallaper;