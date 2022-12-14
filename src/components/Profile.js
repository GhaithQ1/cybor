import React from "react";
import NavBar from "./NavBar";
import profile from "../css/profile.css";
import profiles from "../images/profiles.jpg";
import ClipsProfile from "./ClipsProfile";
import YourGame from "./YourGame";
const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="profile">
        <div className="container">
          <div className="main_disane">
            <div className="main_content_profie">
              <div className="content_profile">
                <img src={profiles} alt="" />
                <div className="content">
                  <span>Offline</span>
                  <h2>Ghaith Borhan</h2>
                  <p>
                    You Haven't Gone Live yet. Go Live By Touching <br /> The
                    Button Below.
                  </p>
                  <button>Start Live Stream</button>
                </div>
                <div className="game">
                  <div className="text_profile">
                    <p>Games Downloaded</p>
                    <span>3</span>
                  </div>
                  <div className="text_profile">
                    <p>Friends Online</p>
                    <span>16</span>
                  </div>
                  <div className="text_profile">
                    <p>Live Streams</p>
                    <span>None</span>
                  </div>
                  <div className="text_profile">
                    <p>Clips</p>
                    <span>29</span>
                  </div>
                </div>
              </div>
              <h2 className="text">
                Your Most Popular<span>Clips</span>
              </h2>

              <ClipsProfile />
            </div>
            <YourGame />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
