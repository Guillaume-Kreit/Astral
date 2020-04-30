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
            <p>Audio</p>
            <audio controls="controls">
                <source src={song}></source>
            </audio>
        </div>
        )
    }
}

export default Song;