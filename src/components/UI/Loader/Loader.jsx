import React from 'react';
import cl from './Loader.module.css'

const Loader = () => {
    return (
        <div className={cl.loader}>
            <div className={cl.loader__circle}></div>
            <div className={cl.loader__text}>
                <h1>Wait<span id={cl.dotsAnimation}>...</span></h1>
            </div>
        </div>
    )       
    
};


export default Loader;