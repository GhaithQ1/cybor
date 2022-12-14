import React from "react";
import TopGmae from "../css/TopGmae.css";
import { Top } from "./DataTopGmae";
const Topgame = () => {

  return (
    <div>
      <h2 className="text">
        Top <span>Streamers</span>
      </h2>
      <div className="main_top">
        {Top.length >= 1 ? (
          Top.map((item) => {
            return (
              <div key={item.id} className="boxs">
                <div className="top_content">
                  <span>{`0${item.id}`}</span>
                  <img src={item.img} alt="" />
                  <div className="icon">
                    <i className={item.icon}></i>
                    <p>{item.desicon}</p>
                  </div>
                </div>
                <button>{item.button}</button>
              </div>
            );
          })
        ) : (
          <h1>Not Data</h1>
        )}
      </div>
    </div>
  );
};

export default Topgame;
