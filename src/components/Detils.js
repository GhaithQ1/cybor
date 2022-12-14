import React from "react";
import NavBar from "./NavBar";
import detils from "../css/detils.css";
import featureleft from "../images/featureleft.jpg";
import featureright from "../images/featureright.jpg";
import details01 from "../images/details01.jpg";
import details02 from "../images/details02.jpg";
import details03 from "../images/details03.jpg";
import { DataDetils } from "./DataDetils";
const Detils = () => {
  return (
    <div>
      <NavBar />
      <div className="detils">
        <div className="container">
          <div className="main_disane">
            <div className="img_top_game">
              <img src={featureleft} alt="" />
              <img src={featureright} alt="" />
            </div>
            <h2>FORTNITE DETAILS</h2>
            <div className="detils_content">
              <div className="namegame">
                <div className="main_content">
                  <div className="smoll_content">
                    <p>Fortnite</p>
                    <span>Sandbox </span>
                  </div>
                  <div className="smoll_icon">
                    <div className="des">
                      <i className="fa fa-star"></i>
                      <span>4.8</span>
                    </div>
                    <div className="des color_icon">
                      <i className="fa fa-download"></i>
                      <span>2.3M</span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="icon">
                    <i className="fa fa-star"></i>
                    <span>4.8</span>
                  </div>
                  <div className="icon color_icon">
                    <i className="fa fa-download"></i>
                    <span>2.3M</span>
                  </div>
                  <div className="icon color_icon">
                    <i className="fa fa-server"></i>
                    <span>36GB</span>
                  </div>
                  <div className="icon color_icon">
                    <i className="fa fa-gamepad"></i>
                    <span>Action</span>
                  </div>
                </div>
              </div>
              <div className="images">
                <div className="img_hover">
                  <img src={details01} alt="" />
                </div>
                <div className="img_hover">
                  <img src={details02} alt="" />
                </div>

                  <img src={details03} alt="" />

              </div>
              <p className="text_detils">
                Cyborg Gaming is free HTML CSS website template provided by
                TemplateMo. This is Bootstrap v5.2.0 layout. You can make a
                small contribution via PayPal to info [at] templatemo.com and
                thank you for supporting. If you want to get the PSD source
                files, please contact us. Lorem ipsum dolor sit consectetur es
                dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
              </p>
              <button className="downlod">Downlod Fortnite New!</button>
            </div>
            <div className="detils_content">
              <h3 className="text">
                Other Related <span>Games</span>
              </h3>
              <div className="main_images">
                {DataDetils.length >= 1 ? (
                  DataDetils.map((item) => {
                    return (
                      <div key={item.id} className="main_content_img">
                        <div className="content_img">
                          <div className="section">
                            <img src={item.img} alt="" />
                            <div>
                              <p>{item.namegame}</p>
                              <span>{item.desname}</span>
                            </div>
                          </div>
                          <div className="section_icon">
                            <div>
                              <i className={item.iconavreg}></i>
                              <span>{item.avreg}</span>
                            </div>
                            <div className="color">
                              <i className={item.icondownlod}></i>
                              <span>{item.downlod}</span>
                            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Detils;
