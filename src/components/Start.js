import React from 'react';

const Start = () => {

    const styles = {
        container: {
            display: 'flex',
            fontSize : '40px',
            justifyContent: 'center',
        },
        cadre: {
            border: '3px blue solid',
        }
        }

    return(
        <div style={styles.container}>
            <p style={styles.cadre}>Okay</p>
        </div>
    );
    
}

export default Start;