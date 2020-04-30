import React from "react";

class Forest extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            padding : '20px',
            width: '70px',
        },
        cadre: {
            padding : '5px',
            textAlign: 'center',
            color: 'white',
            border: '3px white solid',
            padding: '15px 15px',
            borderRadius: '60px',
            textDecoration: 'none',
        }
    }

    render () {
    
        return (
        <div style={this.styles.container} onClick={(event)=>this.props.showForestWebcam(event)} >
            <p style={this.styles.cadre} >FOREST</p>
        </div>
        )
    }
}

export default Forest