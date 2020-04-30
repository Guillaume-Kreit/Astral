import React from "react";
import { Link } from "react-router-dom";
const Begin = () => {
  const styles = {
    container: {
        display: 'flex',
        fontSize : '40px',
        justifyContent: 'center',
        borderRadius: '20px',
        alignItems: 'flex-end',
        marginTop: '320px',
    },
    cadre:{
      color: 'beige',
      border: '3px beige solid',
      padding: '15px 15px',
      borderRadius: '60px',
      textDecoration: 'none',
    }
}
  return(
    <nav style={styles.container}>
      <Link style={styles.cadre} exact to="/MeditationRoom">
            MEDITATE NOW
      </Link>
    </nav>
  )
}
export default Begin;