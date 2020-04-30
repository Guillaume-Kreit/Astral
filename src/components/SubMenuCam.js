import React from 'react';

class SubMenuCam extends React.Component {

    state = {
        isShown: false,
    }

    styles = {
        container: {
            alignContent: 'flex-end',
            width: '100vw',
            height: '40px',
            opacity: '0.73',
            background: 'grey',
            position: 'absolute',
        }
    }

    onMouseEnter = () => {
        this.setState({isShown: true})
    }

    onMouseLeave = () => {
        this.setState({isShown: false})
    }

    render () {
        return (
        <div style={this.styles.container} />
        )
    } 
}

export default SubMenuCam;