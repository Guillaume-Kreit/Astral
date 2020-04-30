import React from 'react';

const Start = () => {

    const styles = {
        container: {
            display: 'flex',
            fontSize : '40px',
            justifyContent: 'center',
            color : 'white',
        },
        cadre: {
            border: '3px white solid',
            padding : '10px',
        }
        }

    return(
        <div style={styles.container}>
            <p style={styles.cadre}>Okay</p>
        </div>
    );
    
}

export default Start;