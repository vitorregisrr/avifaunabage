import React, {useEffect, useState} from 'react';

const SpeechButton = props => {
    const [isPlaying,
        setIsPlaying] = useState(false);

    useEffect(() => {
        return () => {
            speechSynthesis.cancel();
        };
    }, []);

    var speechEl = new SpeechSynthesisUtterance();
    var voices = window
        .speechSynthesis
        .getVoices();
    
    function speechMessage() {
        if (!isPlaying) {
            speechEl.voice = voices.filter(v => v.lang === 'pt-BR')[0]
            speechEl.voiceURI = "native";
            speechEl.volume = 1;
            speechEl.rate = 1;
            speechEl.pitch = 0.8;
            speechEl.text = props.text;
            speechEl.lang = 'pt-BR';
            speechSynthesis.speak(speechEl);
            setIsPlaying(true);

            speechEl.addEventListener('end', () => {
                setIsPlaying(false);
            })

        }else{
            speechSynthesis.cancel();
            setIsPlaying(false);
        }
    }

    return (
        <React.Fragment>
            <button
                className={`${props.classNames} ${isPlaying
                ? 'is-playing'
                : ''}`}
                onClick={() => speechMessage()}></button>
        </React.Fragment>
    )
}

export default SpeechButton;