import React, { useState, useEffect, useRef } from 'react';

//const track = '../../Butterfly Kiss.mp3';
import track from '../../Butterfly Kiss.mp3';

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

const Player = () => {
    const audio = useRef(track);

    const toggle = () => {
        audio.current.paused ? audio.current.play() : audio.current.pause();
        console.log(audio.current.paused);
    }

    return (
        <div>
            <audio ref={audio} src={track} type="audio/mpeg" preload="auto" autoplay loop></audio>
            <button onClick={toggle}>{audio.current.paused ? 'Play' : 'Pause'}</button>
        </div>
    )
}

export default Player;