import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const Player = ({ playlist }) => {
    const [playing, setPlaying] = useState(false);
    const [track, setTrack] = useState({});
    const audio = useRef(track);
    
    //  useEffect(() => {
    //     const fetchRandomTrack = async () => {
    //         const randomTrack = await random(playlist);
    //         console.log(randomTrack, 'Component did mount (of the day)');
            
    //         setTrack(randomTrack);
    //     }
        
    //     track ?? fetchRandomTrack();

    //     audio.current.addEventListener('ended', () => setTrack(track));
        
    //     const audioNode = audio.current;

    //     return () => audioNode.removeEventListener('ended', () => setPlaying(false));
    // }, [track]);

    useEffect(() => {
        setTrack(random(playlist));
        
        audio.current.addEventListener('ended', () => setTrack(track));
        
        const audioNode = audio.current;

        return () => audioNode.removeEventListener('ended', () => setPlaying(false));
    }, [track])
    
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
            <button className="btn" onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
            <span>Now playing:</span>
            <span>{playing ? track?.title : 'Paused... ¯\\_(ツ)_/¯'}</span>
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

Player.propTypes = {
    playlist: PropTypes.arrayOf(PropTypes.object),
}

export default Player;