import React from 'react'
import { DataFeatured } from './dataFeatured';
import feauredAndTop from "../css/feauredAndTop.css";
const Feaured = () => {
  return (
    <div>
      {" "}
      <div className="content">
        <h2 className="text">
          Featured<span> Games</span>
        </h2>
        <div className="main_content">
          {DataFeatured.length >= 1 ? (
            DataFeatured.map((item) => {
              return (
                <div key={item.id} className="smoll-content">
                  <img src={item.img} alt="" />
                  <div className="avrg">
                    <p>{item.namegame}</p>
                    <div>
                      <i className={item.iconaverg}></i>
                      <span>{item.avreg}</span>
                    </div>
                  </div>
                  <div className="intsole">
                    <p>{item.dawon}</p>
                    <div>
                      <i className={item.icondawolode}></i>
                      <span>{item.avregdawonlode}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Not Data</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Feaured