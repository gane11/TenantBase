import React from 'react';
import "./style/ColorCard.css";

const ColorCard = ({color}) => {
    let color1 = {
        backgroundColor: `#${color.colors[0]}`
    }
    let color2 = {
      backgroundColor: `#${color.colors[1]}`,
    };
    let color3 = {
      backgroundColor: `#${color.colors[2]}`,
    };
    let color4 = {
      backgroundColor: `#${color.colors[3]}`,
    };
    let color5 = {
      backgroundColor: `#${color.colors[4]}`,
    };
    
    return (
      <div className="color-container">
        <div className="left-side">
          <div className="color-name">{color.title}</div>
          <div className="color-createdby">
            by {color.userName} at {color.dateCreated.split(" ")[1]}
          </div>
          <div className="color-rating">
            <div className="color-views">
              {color.numViews}{" "}
              {color.numViews === 1 ? <span>view</span> : <span>views</span>}
            </div>
            <div className="color-vote">
              {color.numVotes}{" "}
              {color.numVotes === 1 ? <span>vote</span> : <span>votes</span>}
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="color-color" style={color1}></div>
          <div className="color-color" style={color2}></div>
          <div className="color-color" style={color3}></div>
          <div className="color-color" style={color4}></div>
          <div className="color-color" style={color5}></div>
        </div>
      </div>
    );

};

export default ColorCard;