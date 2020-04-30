import React from "react";
import Webcam from './Webcam';
import SubMenuCam from "./SubMenuCam";


class YogaSession extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            height: '100vh',
            width: '100%',
            margin: '0px',
        },
    }

    render () {
        return (
        <>
            <Webcam {...this.props}/>
            <SubMenuCam />
        </>
        )
    }
}

export default YogaSession