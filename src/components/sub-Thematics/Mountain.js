import React from "react";

class Mountain extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            color : 'white',
            border: '3px white solid',
            padding : '20px',
            width: '70px',
        },
        cadre: {
            textAlign: 'center'
        }
    }

    render () {
        return (
        <div style={this.styles.container} onClick={(event)=>this.props.showMountainWebcam(event)}>
            <p style={this.styles.cadre} >MOUNTAIN</p>
        </div>
        )
    }
}

export default Mountain