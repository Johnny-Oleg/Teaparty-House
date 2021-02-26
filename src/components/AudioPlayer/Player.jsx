import React, { useState, useEffect, useRef } from 'react';

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const Player = ({ playlist: { music } }) => {
    const [playing, setPlaying] = useState(false);
    const [track, setTrack] = useState({});

    useEffect(() => {
        let track = random(music);  

        setTrack(track);
    }, [music])
    
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
                src={process.env.PUBLIC_URL + `${track.track}.mp3`} 
                type="audio/mpeg" 
                preload="auto" 
                autoplay 
                // loop
            />
            <button className="btn" onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
            <br/>
            <span>Now playing: {track.title}</span>
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

export default Player;