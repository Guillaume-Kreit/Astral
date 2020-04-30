import React from "react";
import { Link } from "react-router-dom";
const Begin = () => {
  const styles = {
    container: {
        textDecoration: 'none',
        display: 'flex',
        fontSize : '40px',
        justifyContent: 'center',
        borderRadius: '20px',
        alignItems: 'flex-end',
        marginTop: '150px',
    },
    cadre:{
      border: '3px white solid',
      padding: '15px 15px',
      borderRadius: '20px'
    }
}
  return(
    <nav style={styles.container}>
      <Link style={styles.cadre} exact to="/YogaRoom">
            BEGIN !
      </Link>
    </nav>
  )
}
export default Begin;