import React from "react";
import Thematics from './Thematics';
import Title from "./Title";
import Timer from "./Timer";
import Start from "./Start";
// import Webcam from "./Webcam";
import Wallaper from "./Wallaper";


class YogaRoom extends React.Component {  
    styles = {
        container: {
            
            
            
        },

        left: {
            backgroundColor : 'yellow',
            color : 'red',
        }
    }

    render () {
        return (
            
            <div style={this.styles.container}>
                <Wallaper/>
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


