import React from "react";

class Beach extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            color : 'beige',
            padding: '20px',
            width: '70px',
            padding : '20px',
        },
        cadre: {
            textAlign: 'center',
            color: 'beige',
            border: '3px beige solid',
            padding: '15px 15px',
            borderRadius: '60px',
            textDecoration: 'none',
        }
    }

    render () {
        return (
        <div style={this.styles.container} onClick={(event)=>this.props.showBeachWebcam(event)}>
            <p style={this.styles.cadre} >BEACH</p>
        </div>
        )
    }
}

export default Beach