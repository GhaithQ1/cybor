import React from 'react'
import banner from "../images/banner-bg.jpg"
import yourgame from "../css/yourgame.css";
import {game} from './datayourgame'
const YourGame = () => {
  return (
    <div>
      <div className="your_gaming">
        <h2>
          Your Gaming <span>Library</span>
        </h2>
        <div className="game">
          {game.length >= 1 ? (game.map((item) => {
            return (
              <div key={item.id} className="smoll_game">
                <img src={item.img} alt="" />
                <div>
                  <p>{item.namegame}</p>
                  <span>{item.box}</span>
                </div>
                <div>
                  <p>{item.dateAdded}</p>
                  <span>{item.date}</span>
                </div>
                <div>
                  <p>{item.hoursPlayed}</p>
                  <span>{item.hours}</span>
                </div>
                <div>
                  <p>{item.Currently}</p>
                  <span>{item.Downloaded}</span>
                </div>
                <button>{item.Downloaded}</button>
              </div>
            );
          })) : (<h1>Not data</h1>)}

        </div>
      </div>
    </div>
  );
}

export default YourGame