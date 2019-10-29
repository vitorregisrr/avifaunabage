import React, {useRef, useState, useEffect} from 'react';

const AudioPlayButton = props => {
    const [isPlaying,
        setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    let audioFile;

    try {
        audioFile = require(`assets/audios/${props.src}`);
    } catch (e) {
        audioFile = null;
    }

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef
                    .current
                    .play();
            } else {
                audioRef
                    .current
                    .pause();
            }
        }
    });

    return (
        <React.Fragment>
            {audioFile
                ? <React.Fragment>
                        <audio ref={audioRef}>
                            <source src={audioFile} type="audio/mpeg"/>
                        </audio>
                        <button
                            className={`${props.classNames} ${isPlaying
                            ? 'is-playing'
                            : ''}`}
                            onClick={() => setIsPlaying(!isPlaying)}></button>
                    </React.Fragment>
                : ''}
        </React.Fragment>
    )
}

export default AudioPlayButton;