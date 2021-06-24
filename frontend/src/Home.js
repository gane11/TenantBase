import React, {useEffect, useState} from 'react';
import ColorCard from './ColorCard';
import {getAllColors} from './store/actions/colorsAction';

const Home = (colors, getAllColors) => {

    const [lastUpdate, setLastUpdate] = useState(new Date().getTime());

    useEffect(() => {
        getAllColors()
    }, [])

    return (
        <div>
            <div className="updated-time">
                {lastUpdate}
            </div>
            <div className="title">
                ColourLovers. <span className="title-right">Live.</span>
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