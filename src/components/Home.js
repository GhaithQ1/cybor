import React from "react";
import { home } from "../css/home.css";
import { Most } from "./datahome";
import YourGame from "./YourGame";
import NavBar from "./NavBar";
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="main_home">
        <div className="container">
          <div className="main_disane">
            <div className="browse">
              <div className="content">
                <p>Welcome To Cyborg</p>
                <h2 className="text">
                  <span>BROWSE</span> OUR POPULAR <br /> GAMES HERE
                </h2>
                <Link to="/browse">
                  <button>Browse Now</button>
                </Link>
              </div>
            </div>
            <div className="popular">
              <h2 className="text">
                Most Popular <span>Right Now</span>
              </h2>
              <div className="main_container">
                {Most.length >= 1 ? (
                  Most.map((item) => {
                    return (
                      <div key={item.id} className="smoll_box">
                        <div className="rotetimg">
                          <img src={item.img} alt="" />
                        </div>
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
              <button>Discover Popular</button>
            </div>
            <YourGame />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
