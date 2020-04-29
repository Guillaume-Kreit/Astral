import React from "react";
import FiveMinuts from "./sub-Timer/FiveMinuts";
import TenMinuts from "./sub-Timer/TenMinuts";

class Timer extends React.Component {  
    styles = {
        container: {
            display: 'flex',
            height: '30vh',
            width: '80%',
            margin: '0px',
            backGroundColor: 'yellow',
        },
    }

    render () {
        return (
        <div>
            <p>TIMER</p>
            <FiveMinuts />
            <TenMinuts />
        </div>
        )
    }
}

export default Timer