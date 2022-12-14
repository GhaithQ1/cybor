import React from "react";
import { DataStreame } from "./datastreame";
const Streame = () => {
  return (
    <div>
      <div className="streame">
      {DataStreame.length >= 1 ? (
        DataStreame.map((item) => {
          return (
            <div key={item.id} className="box_stream">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.des}</p>
            </div>
          );
        })
      ) : (
        <h1> Not Data</h1>
        )}
      </div>
    </div>
  );
};

export default Streame;
