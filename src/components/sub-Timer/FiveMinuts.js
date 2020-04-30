import React from "react";

class FiveMinuts extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            color : 'red',
        },
        cadre: {
            border: '3px red solid',
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