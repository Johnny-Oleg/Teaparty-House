import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';

const Player = () => {
    const [track, setTrack] = useState(null);
    const [playing, setPlaying] = useState(false);
    const audio = useRef(track);
    const playlist = useSelector(state => state.playlist.playlist)
    
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
        <div>
            <audio 
                ref={audio} 
                src={process.env.PUBLIC_URL + `${track?.track}.mp3`} 
                type="audio/mpeg" 
                preload="auto" 
                autoPlay 
                // loop
            />
            <button className="btn" onClick={toggle}>
                {playing ? 'Pause' : 'Play'}
            </button>
            <span>{playing ? 'Now playing:' : 'Paused... ¯\\_(ツ)_/¯'}</span>
            <span>{track?.title}</span>
        </div>
    )
}

// useEffect(() => {
    //     const fetchRandomTrack = async () => {
    //         const randomTrack = await random(playlist);
            
    //         setTrack(randomTrack);
    //     }

    //     track ?? fetchRandomTrack();
        
    //     audio.current.addEventListener('ended', () => {
    //         //setPlaying(false);
    //         //setTrack(track);
    //         setTrack(fetchRandomTrack);
    //     })
    //     console.log(track, 'track');
    //     const audioNode = audio.current;

    //     return () => audioNode.removeEventListener('ended', () => setPlaying(false));
    // }, [track, audio])

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