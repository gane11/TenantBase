import React, {useEffect, useState} from 'react';
import ColorCard from './ColorCard';
import {getAllColors} from './store/actions/colorsAction';

const Home = (colors, getAllColors) => {

    useEffect(() => {
        getAllColors()
    }, [])

    return (
        <div>
            <div className="updated-time">

            </div>
            <div className="title">

            </div>
            <div className="colors-container">
                {colors.map(color => {
                    return(
                        <ColorCard color={color}/>
                    )
                })}
            </div>
        </div>
    );
};



export default Home;