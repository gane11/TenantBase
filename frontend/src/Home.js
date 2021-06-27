import React, {useEffect} from 'react';
import ColorCard from './ColorCard';
import './style/Home.css';

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
                        <ColorCard key={color.id} color={color}/>
                    )
                })}
            </div>
        </div>
    );
};



export default Home;