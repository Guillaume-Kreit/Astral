import React from "react";

class TenMinuts extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            color : 'white',
            padding : '20px',
            width: '120px',
        },
        cadre: {
            color: 'white',
            border: '3px white solid',
            padding: '15px 15px',
            borderRadius: '20px',
            textDecoration: 'none',
        }
    }

    render () {
        return (
        <div style={this.styles.container}>
            <p style={this.styles.cadre} >10 Minuts</p>
        </div>
        )
    }
}

export default TenMinuts;