import React from "react";

class Forest extends React.Component {  
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
            <p style={this.styles.cadre} >FOREST</p>
        </div>
        )
    }
}

export default Forest