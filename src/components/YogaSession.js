import React from "react";
import Webcam from './Webcam';


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
            <div>
                <h1>YOGASESSION</h1>
            </div>
        </>
        )
    }
}

export default YogaSession