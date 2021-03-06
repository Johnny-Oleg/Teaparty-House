import React from 'react';

import './Video.css';
import video from '../../DQXI.mp4';
const Video = () => {
    return (
        <div className="video-content">
            <video 
                className="video"
                src={video}
                autoPlay
                loop
                muted
                playsInline
                data-object-fit="cover"
                poster=""
            >
            </video>
            <div className="shadow"></div>
            <div className="text-content">
                <h1>Teaparty House | ティーパーティーハウス</h1>
                <p>The only place to rest... | 休む唯一の場所...</p>
            </div>
        </div>
    )
}

export default Video;