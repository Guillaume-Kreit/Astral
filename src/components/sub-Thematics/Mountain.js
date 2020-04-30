import React from "react";

class Mountain extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            color : 'white',
        },
        cadre: {
            border: '3px white solid',
            padding : '5px',
        }
    }

    render () {
        return (
        <div style={this.styles.container}>
            <p style={this.styles.cadre} >MONTAIN</p>
        </div>
        )
    }
}

export default Mountain