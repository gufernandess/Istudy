import React, {useState, useRef, useEffect} from 'react';
import './Player.css';

function usePlayerState($videoPlayer){
    const [playerState, setPlayerState] = useState({
        playing: false,
        percentage: 0,
    });

    useEffect(() => {
        playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause()

    }, [playerState.playing]);

    function toogleVideoPlay(){
        setPlayerState({
            ...playerState,
            playing: !playerState.playing,
        })
    }

    function handleTimeUpdate(){
            const currentPercentage = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100;

            setPlayerState({
                ...playerState,
                percentage: currentPercentage,
            })
    }

    function handleChangeVideoPercentage(event){
        const currentPercentageValue = event.target.value;
        $videoPlayer.current.currentTime = $videoPlayer.current.duration / 100 * currentPercentageValue

        setPlayerState({
            ...playerState,
            percentage: currentPercentageValue,
        })
    }

    return{
        playerState,
        toogleVideoPlay,
        handleTimeUpdate,
        handleChangeVideoPercentage
    }
}

const videoURL = "";
export default function Player(){
    const $videoPlayer = useRef(null);
    const {playerState, toogleVideoPlay, handleTimeUpdate, handleChangeVideoPercentage} = userPlayerState($videoPlayer);

   
    

    return(
        <div className = "videoWrapper">
            <video
             ref = {$videoPlayer}
            src = {videoURL}
            poster = ""
            onTimeUpdate = {handleTimeUpdate}
            />
            <div className = "controls">
                <button onClick = {toogleVideoPlay}>
                    {playerState.playing ? "Pause" : "Play"}
                    </button>
                    <input 
                    type = "range"
                    min = "0"
                    max = "100"
                    onChange = {handleChangeVideoPercentage}
                    value = {playerState.percentage}
                    />
                    <select>
                        {[1, 2, 3].map(speed => (
                            <option
                            key = {`speedChange_${speed}`}
                            >
                                {speed}
                                </option>
                        ))}
                        </select>
                        </div>
                        </div>
    );
}