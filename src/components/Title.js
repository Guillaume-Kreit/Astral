import React from 'react';

const Title = () => {

    const styles = {
        container: {
            display: 'flex',
            fontSize : '40px',
            justifyContent: 'center',
            color : 'white',
        }
        }

    return(
        <div style={styles.container}>
            <h1>Meet your Inner Child</h1>
        </div>
    );
    
}

export default Title;