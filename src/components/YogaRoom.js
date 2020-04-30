import React from "react";
import Thematics from './Thematics';
import Title from "./Title";
import Timer from "./Timer";
import Start from "./Start";
// import Webcam from "./Webcam";


class YogaRoom extends React.Component {  
    styles = {
        container: {
            backgroundColor : 'pink',
            backgroundImage : "url('../img/85fca7a3fb831303eda8098077265408.jpg') ",
            width : '100%',
            height : '100vh',
        },

        left: {
            backgroundColor : 'yellow',
            color : 'red',
        }
    }

    render () {
        return (
        <div style={this.styles.container}>
            <Title/>
            <Thematics style={this.styles.left} />
            {/* <Webcam/> */}
            <Timer />
            <Start />
        </div>
        )
    }
}

export default YogaRoom


