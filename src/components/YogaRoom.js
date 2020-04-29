import React from "react";
import Thematics from './Thematics';
import Title from "./Title";
import Timer from "./Timer";
import Start from "./Start";


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
        <div>
            <p>YOGAROOM</p>
            <Title />
            <Thematics />
            <Timer />
            <Start />
        </div>
        )
    }
}

export default YogaRoom


