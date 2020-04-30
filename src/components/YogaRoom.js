import React from "react";
import Thematics from './Thematics';
import Title from "./Title";
import Timer from "./Timer";
import Start from "./Start";
// import Webcam from "./Webcam";
//import zen from "../img/zen";


class YogaRoom extends React.Component {  
    styles = {
        container: {
            backgroundColor : 'pink',
            backgroundImage : "src('../img/zen.jpg') ",
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


