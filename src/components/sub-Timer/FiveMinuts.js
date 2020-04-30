import React from "react";

class FiveMinuts extends React.Component {  
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
            <p style={this.styles.cadre} >Five Minuts</p>
        </div>
        )
    }
}

export default FiveMinuts