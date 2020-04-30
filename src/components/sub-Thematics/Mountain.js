import React from "react";

class Mountain extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            padding : '20px',
            width: '70px',
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
        <div style={this.styles.container} onClick={(event)=>this.props.showMountainWebcam(event)}>
            <p style={this.styles.cadre} >MOUNTAIN</p>
        </div>
        )
    }
}

export default Mountain