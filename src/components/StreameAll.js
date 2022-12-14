import React from "react";
import NavBar from "./NavBar";
import Streame from "../css/streame.css";
import Feaured from "./Feaured";
import Topgame from "./TopGame";
import LiveStreame from "./LiveStreameStreame";

const StreameAll = () => {
  return (
    <div>
      <NavBar />
      <div className="Streames">
        <div className="container">
          <div className="main_disane ">
            <div className="featured">
              <Feaured />
              <div className="top_game">
                <Topgame />
              </div>
            </div>
            <LiveStreame/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreameAll;
