import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const Player = ({ playlist }) => {
    const [playing, setPlaying] = useState(false);
    const [track, setTrack] = useState({});


    useEffect(() => {
        let track = random(playlist);  

        setTrack(track);
    }, [playlist])
    
    const audio = useRef(track);

    const toggle = () => {
        audio.current.paused ? audio.current.play() : audio.current.pause();
        console.log(audio.current.ended);
        
        setPlaying(!playing);
        console.log(audio.current.paused, playing);
    }

    return (
        <div>
            <audio 
                ref={audio} 
                src={process.env.PUBLIC_URL + `${track?.track}.mp3`} 
                type="audio/mpeg" 
                preload="auto" 
                autoPlay 
                loop
            />
            <button className="btn" onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
            <br/>
            <span>Now playing: {track?.title}</span>
        </div>
    )
}

// const useAudio = track => {
//     const [audio] = useState(new Audio(track));
//     const [playing, setPlaying] = useState(false);

//     const toggle = () => setPlaying(!playing);

//     useEffect(() => playing ? audio.play() : audio.pause(), [playing]);

//     useEffect(() => {
//         audio.addEventListener('ended', () => setPlaying(false));

//         return () => audio.removeEventListener('ended', () => setPlaying(false));
//     }, []);

//     return [playing, toggle];
// }

// const Player = ({ track }) => {
//     const [playing, toggle] = useAudio(track);

//     return (
//         <div>
//             <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//         </div>
//     )
// }

// class Player extends React.Component {
//   state = {
//     play: false
//   };
  
//   audio = new Audio(this.props.track);

//   componentDidMount() {
//     this.audio.addEventListener('ended', () => this.setState({ play: false }));
//     console.log(this.audio.src);
//   }

//   componentWillUnmount() {
//     this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
//   }

//   togglePlay = () => {
//     this.setState({ play: !this.state.play }, () => {
//       this.state.play ? this.audio.play() : this.audio.pause();
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
//       </div>
//     );
//   }
// }

Player.propTypes = {
    playlist: PropTypes.arrayOf(PropTypes.object),
}

export default Player;