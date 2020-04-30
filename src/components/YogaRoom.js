import React from "react";
import Thematics from './Thematics';
import Title from "./Title";
import Timer from "./Timer";
import Start from "./Start";
import Webcam from './Webcam';


class YogaRoom extends React.Component {  
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
                <div>
                    <Title />
                    <Thematics {...this.props}/>
                    <Timer />
                    <Start />
                </div>
            </>
        )
    }
}

export default YogaRoom


