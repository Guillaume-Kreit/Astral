import React from "react";
import song from './mp3/meditation.mp3';

class Song extends React.Component {  
    styles = {
        container: {
            color : 'red',
        },
    }

    render () {
        return (
        <div style={this.styles.container}>
            
            <audio controls="controls" autoplay="autoplay">
                <source src={song}></source>
            </audio>
        </div>
        )
    }
}

export default Song;