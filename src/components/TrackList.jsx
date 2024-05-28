import React from 'react';

const TrackList = ({tracks}) => {
    return (
        <>
            <h1 style={{textAlign: 'center', color:'white'}}>Music</h1>

            {tracks.map((track) =>
                track={track}               
            )};
        
        </>
    );
};

export default TrackList;