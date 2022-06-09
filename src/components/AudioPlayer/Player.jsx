import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';

import './Player.css';

const Player = () => {
    const [track, setTrack] = useState(null);
    const [playing, setPlaying] = useState(false);
    const audio = useRef(track);
    const playlist = useSelector(state => state.playlist.playlist);
    
    const random = arr => arr[Math.floor(Math.random() * arr.length)];

    const fetchRandomTrack = useCallback(async () => {
        const randomTrack = await random(playlist);

        setTrack(randomTrack);
        console.log(randomTrack, 'fetch');
    }, [playlist]);
    

    useEffect(() => {
        fetchRandomTrack();
        console.log('first music');
    }, [fetchRandomTrack]);

    useEffect(() => {
        audio.current.addEventListener('ended', () => {
            setTrack(fetchRandomTrack);
            console.log('re-track');
        })

        console.log('re-track');
        const audioNode = audio.current;

        return () =>
            audioNode.removeEventListener('ended', () => setPlaying(false));
    }, [audio, fetchRandomTrack])    
    
    const toggle = () => {
        audio.current.paused ? audio.current.play() : audio.current.pause();
        
        setPlaying(!playing);
    }

    return (
        <div className="audio nes-container is-rounded">
            <audio 
                className="audio__track"
                ref={audio} 
                src={process.env.PUBLIC_URL + `${track?.track}.mp3`} 
                type="audio/mpeg" 
                preload="auto" 
                autoPlay 
                // loop
            />
            <div className="audio__info">
                <span>{playing ? 'Now playing:' : 'Paused... ¯\\_(ツ)_/¯'}</span>
                <span>{track?.title}</span>
            </div>
            <button className="player__btn nes-btn is-primary" onClick={toggle}>
                {playing ? 'Pause' : 'Play'}
            </button>
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

export default Player;