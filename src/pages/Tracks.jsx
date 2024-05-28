import React from 'react';
import TrackMenu from '../components/TrackMenu';
import music from '../music';
import posters from '../trackposters';
import clips from '../clips';


const Tracks = () => {   
    
    const tracks = [
        {name: 'Большой брат', author: 'Obladaet', sound: music[0], poster: posters[0], video: clips[0]},
        {name: 'GP$', author: 'Obladaet', sound: music[1], poster: posters[0], video: clips[1]},
        {name: '735 PROBLEMS', author: 'Obladaet', sound: music[2], poster: posters[0]},
        {name: 'BOO!', author: 'Obladaet', sound: music[10], poster: posters[0], video: clips[2]},
        {name: 'PRAYERS', author: 'Obladaet', sound: music[4], poster: posters[0], video: clips[4]},
        {name: 'Sladki Snov Rapper 2', author:'FREINDLY THUG 52 NGG', sound: music[14], poster: posters[2], video: clips[5]},
        {name: 'Lost Angeles', author:'FREINDLY THUG 52 NGG', sound: music[13], poster: posters[2], video: clips[3]},
        {name: 'Бабочки', author: 'Obladaet', sound: music[3], poster: posters[0]},
        {name: 'INVESTOR', author: 'Obladaet', sound: music[5], poster: posters[0]},
        {name: 'GLOBA', author: 'Obladaet', sound: music[6], poster: posters[0]},
        {name: 'MMM', author: 'Obladaet', sound: music[7], poster: posters[0]},
        {name: 'SKI ANORAK', author: 'Obladaet', sound: music[8], poster: posters[0]},
        {name: 'Проклятие', author: 'Obladaet', sound: music[9], poster: posters[0]},
        {name: 'HARLEQUIN', author: 'Obladaet', sound: music[11], poster: posters[0]},
        {name: 'ЕРУНДА', author: 'kondachelo', sound: music[12], poster: posters[1]},
   ];


    return (
        <>         
            <h1 style={{textAlign: 'center', color:'white', fontSize: '50px'}}>Music</h1>

            <TrackMenu tracks={tracks}/>
            
        </>
    )
};

export default Tracks;