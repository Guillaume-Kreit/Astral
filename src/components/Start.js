import React from 'react';
import { Link } from "react-router-dom";

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
        <nav style={styles.container}>
            <Link activeClassName="active" exact to="/YogaSession">
                <p style={styles.cadre}>Okay</p>
            </Link>
        </nav>
    );
    
}

export default Start;