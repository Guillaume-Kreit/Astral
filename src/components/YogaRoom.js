import React from "react";
import Thematics from './Thematics';
import Title from "./Title";
import Timer from "./Timer";
import Start from "./Start";
// import Webcam from "./Webcam";
import Wallaper2 from "./Wallaper2";


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
                <Wallaper2/>
                <Title/>
                <Thematics style={this.styles.left}  {...this.props}/>
                <Timer />
                <Start />
            </div>
        )
    }
}

export default YogaRoom


