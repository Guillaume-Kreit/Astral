import React from "react";

class Title extends React.Component {  
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
            <p>TITLE</p>
        </div>
        )
    }
}

export default Title