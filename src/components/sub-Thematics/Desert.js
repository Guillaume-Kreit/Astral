import React from "react";

class Desert extends React.Component {  
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
        <div style={this.styles.container} onClick={(event)=>this.props.showIslandWebcam(event)}>
            <p style={this.styles.cadre} >DESERT</p>
        </div>
        )
    }
}

export default Desert