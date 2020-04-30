import React from "react";

class TenMinuts extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            color : 'beige',
            padding : '20px',
            width: '90px',
        },
        cadre: {
            color: 'beige',
            border: '3px beige solid',
            padding: '15px 15px',
            borderRadius: '60px',
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