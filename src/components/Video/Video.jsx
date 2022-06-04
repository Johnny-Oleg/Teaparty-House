import React from 'react';

import './Video.css';
import video from '../../DQXI.mp4';

const Video = () => {
    return (
        <div className="video">
            <video
                className="video__content"
                src={video}
                autoPlay
                loop
                muted
                playsInline
                data-object-fit="cover"
                poster=""
            ></video>
            <div className="shadow"></div>
            <div className="container">
                <div className="video__inner">
                    <div className="video__inner-content">
                        <h1 className="video__inner-title">
                            Teaparty House&nbsp;
                            <span>ティーパーティーハウス</span>
                        </h1>
                        <h2 className="video__inner-subtitle">
                            The only place to rest...&nbsp;
                            <span>休む唯一の場所...</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;