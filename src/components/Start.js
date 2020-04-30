import React from 'react';
import { Link } from "react-router-dom";

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
        <nav style={styles.container}>
            <Link activeClassName="active" exact to="/YogaSession">
                <p style={styles.cadre}>Okay</p>
            </Link>
        </nav>
    );
    
}

export default Start;