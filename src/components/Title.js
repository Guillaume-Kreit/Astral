import React from 'react';

const Title = () => {

    const styles = {
        container: {
            display: 'flex',
            fontSize : '40px',
            justifyContent: 'center',
            backGroundColor: 'yellow',
        }
        }

    return(
        <div style={styles.container}>
            <h1>Parameter</h1>
        </div>
    );
    
}

export default Title;