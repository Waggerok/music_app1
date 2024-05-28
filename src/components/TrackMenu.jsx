import React, { useState, useRef, useEffect } from 'react';
import previous from '../images/controls/next_previous.png';
import next from '../images/controls/next_previous.png';
import unMutedBtn from '../images/controls/volume.png';
import mutedBtn from '../images/controls/muted.png';
import play from '../images/controls/play.png';
import pause from '../images/controls/pause.png';
import { hover } from '@testing-library/user-event/dist/hover';


const TrackMenu = ({tracks}) => {

    let [volume, setVolume] = useState(0.2);

    const [isMuted, setIsMuted] = useState(true);

    let [currentTrack, setCurrentTrack] = useState(0);

    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(new Audio(tracks[currentTrack].sound)); 

    const [currentTime,setCurrentTime] = useState(0);


    //видео
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        setCurrentVideo(tracks[currentTrack].video)
    }, [currentTrack, tracks])

    useEffect(() => {
        const audio = audioRef.current;
        const timeUpdate = () => {
            setCurrentTime(audio.currentTime);
        };
        audio.addEventListener('timeupdate', timeUpdate);
        return () => {
            audio.removeEventListener('timeupdate', timeUpdate);
        };
        }, []);

    useEffect(() => {
        audioRef.current.src = tracks[currentTrack].sound;
    }, [currentTrack]);

    //работа с ползунком перемотки трека

    const handleTimeChange = (e) => {
        const time = e.target.value;
        audioRef.current.currentTime = time;
    };
    
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds - minutes * 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    //переключение треков, пауза, воспроизведение

    const playTrack = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
            setIsVideoPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
            setIsVideoPlaying(false);
        }
    };
      
    const nextTrack = () => {
        if (currentTrack < tracks.length - 1) {
            setCurrentTrack(currentTrack + 1);
            setCurrentVideo(currentVideo + 1);
        } else {
            setCurrentTrack(0); 
            setCurrentVideo(0);
        }
        setIsPlaying(false);
        setIsVideoPlaying(false);
    };
    
    const previousTrack = () => {
        if (currentTrack > 0) {
            setCurrentTrack(currentTrack - 1);
            setCurrentVideo(currentVideo - 1)
        } else {
            setCurrentTrack(tracks.length - 1); 
            setCurrentVideo(tracks.length - 1);
        }
        setIsPlaying(false);
        setIsVideoPlaying(false);
    };
    
    //работа со звуковым ползунком

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    const changeMute = () => {
        if (audioRef.current.volume >= 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        };
    };

    const MuteVolume = () => {
        setVolume(audioRef.current.volume = 0);
        setIsMuted(false);
    };
    
    return (
        <>
            <video
                src={currentVideo}
                autoPlay={true}
                loop={true}
                muted={true}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                    display: isVideoPlaying ? 'block' : 'none',
                }}
            />     

            <div className="trackMenu" style={{border: isVideoPlaying ? 'none' : '2px solid #555555'}}>
                <div className="trackMenu__items" style={{opacity: isVideoPlaying ? '0.2' : '1'}}>
                    
                    <div className="trackMenu__items_image">
                        {!tracks[currentTrack].video ? (
                            <img src={tracks[currentTrack].poster} alt="track_image" style={{scale : isPlaying ? '0.85' : '1'}}/>
                        ) : (
                            <img src={tracks[currentTrack].poster} alt="track_image" style={{display: isVideoPlaying ? 'none' : 'block'}}/>
                        )}                       
                    </div>
                    <div className="trackMenu__items_line">
                        <span className="trackMenu__items_line_current-time">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            min="0" 
                            max={audioRef.current.duration} 
                            value={currentTime} 
                            onChange={handleTimeChange} 
                        />
                        <span className="trackMenu__items_line_total-duration">{formatTime(audioRef.current.duration)}</span>
                    </div>

                    <div className="trackMenu__items_text">
                    <div className="trackMenu__items_text_name">{tracks[currentTrack].name}</div>
                    <div className="trackMenu__items_text_author">{tracks[currentTrack].author}</div>
                    </div>

                    <div className="trackMenu__items_btns">
                        <div className="trackMenu__items_btns_previous" onClick={previousTrack}>
                            <img src={previous} alt="previous" />
                        </div>
                        <div className="trackMenu__items_btns_play" onClick={playTrack}>
                            <img src={isPlaying ? pause : play} alt="play/pause" id='play/pause'/>                        
                        </div>
                        <div className="trackMenu__items_btns_next" onClick={nextTrack}>
                            <img src={next} alt="next" />
                        </div>
                    </div>
                    <div className="trackMenu__items_volume">
                        <div className="trackMenu__items_volume_btn">
                            <img src={isMuted ? unMutedBtn : mutedBtn } alt="volumeBtn" onClick={MuteVolume}/>
                        </div>
                        <div className="trackMenu__items_volume_line" onChange={changeMute}>
                            <input 
                                type="range" 
                                min='0' 
                                max='1' 
                                step='0.01' 
                                value={volume} 
                                onChange={e => setVolume(e.target.value)} 
                            />
                        </div>
                    </div>
                </div>
            </div>      
        </>
    );
};

export default TrackMenu;