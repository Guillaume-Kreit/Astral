import React from 'react';
import { Link } from "react-router-dom";

const Start = () => {

    const styles = {
        container: {
            display: 'flex',
            fontSize : '40px',
            justifyContent: 'center',
            color : 'beige',
        },
        cadre: {
            color: 'beige',
            border: '3px beige solid',
            padding: '15px 15px',
            borderRadius: '20px',
            textDecoration: 'none',
        }
        }

    return(
        <nav style={styles.container}>
            <Link activeClassName="active" exact to="/YogaSession">
                <p style={styles.cadre}>Go</p>
            </Link>
        </nav>
    );
    
}

export default Start;