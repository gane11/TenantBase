import React, {useEffect, useState} from 'react';
import ColorCard from './ColorCard';
import {getAllColors} from './store/actions/colorsAction';
import {useDispatch, useSelector} from 'react-redux';

const Home = ({colors, getAllColors}) => {

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