import React from "react";
import Thematics from './Thematics';
import Title from "./Title";
import Timer from "./Timer";


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
        </div>
        )
    }
}

export default YogaRoom


