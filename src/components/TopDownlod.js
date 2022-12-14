import React from 'react'
import { Download } from "./DataTopDownlod";
import feauredAndTop from "../css/feauredAndTop.css";
const TopDownlod = () => {
  return (
    <div>
      {" "}
      <h2 className="text">
        Top
        <span>Downloaded</span>
      </h2>
      <div className="boxs">
        {Download.length >= 1 ? (
          Download.map((item) => {
            return (
              <div key={item.id} className="content">
                <div className="state">
                  <img src={item.img} alt="" />
                  <div className="info">
                    <p>{item.namegame}</p>
                    <span>{item.dawon}</span>
                    <div className="icon">
                      <i className={item.iconaverg}></i>
                      <span>{item.avreg}</span>
                      <i className={item.icondawolode}></i>
                      <span>{item.avregdawonlode}</span>
                    </div>
                  </div>
                </div>
                <i className={`${item.icondawolode} downlo`}></i>
              </div>
            );
          })
        ) : (
          <h1>Not Data</h1>
        )}
      </div>
      <p className="vioe">View All Games</p>
    </div>
  );
};

export default TopDownlod;