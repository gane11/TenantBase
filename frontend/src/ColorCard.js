import React from 'react';
import "./ColorCard.css";

const ColorCard = ({color}) => {
    
    
    return (
        <div className="color-container">
            <div className="left-side">
                <div className="color-name">
                    {color.title}
                </div>
                <div className="color-createdby">
                    {color.userName}
                </div>
                <div className="color-rating">
                    <div className="color-views">
                        {color.numViews}
                    </div>
                    <div className="color-vote">
                        {color.numVotes}
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="color-color">

                </div>
                <div className="color-color">

                </div>
                <div className="color-color">

                </div>
                <div className="color-color">

                </div>
                <div className="color-color">

                </div>
            </div>
        </div>
    )

};

export default ColorCard;