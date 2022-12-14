import React from "react";
import NavBar from "./NavBar";
import browse from "../css/browse.css";
import Feaured from "./Feaured";
import TopDownlod from "./TopDownlod";
import Streame from "./Streame";
import Titlestreame from "./Titlestreame";
import Livestreame from "./Livestreame";
import { Link } from "react-router-dom";
const Browse = () => {
  return (
    <div>
      <NavBar />
      <div className="main_featured">
        <div className="container">
          <div className="main_disane">
            <div className="featured">
              <Feaured />
              <div className="top">
                <TopDownlod />
              </div>
            </div>
            <Titlestreame />
            <Streame />
            <Link to="/profile">
              <button className="go_profile">Go To Profile</button>
            </Link>
            <Livestreame />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
