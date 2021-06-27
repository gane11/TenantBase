import React, {useEffect, useState} from 'react';
import ColorCard from './ColorCard';
import {getAllColors} from './store/actions/colorsAction';
import {useDispatch, useSelector} from 'react-redux';
import './Home.css'

const Home = ({colors, getAllColors}) => {

    let hoursMinutes = `${new Date().getHours()}:${new Date().getMinutes()}  `  

    useEffect(() => {
        getAllColors();
        const interval = setInterval(() => {
            getAllColors();
        }, 60000);
        return () => clearInterval(interval);
    }, [])


    return (
        <div className="home">
            <div className="updated-time">
                Last Updated at {hoursMinutes} 
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

const HomeContainer= () => {
    const colors = useSelector((state) => Object.values(state.colors));
    const dispatch = useDispatch();
    return(
        <Home 
            colors={colors}
            getAllColors={() => dispatch(getAllColors())}
        />
    )
}



export default HomeContainer;