import React from 'react'
import { Live } from './Datalivestreame';
const Livestreame = () => {
  return (
    <div>
      {" "}
      <div className="live_streame">
        <h2 className="text">
          Most Popular <span>Live Stream</span>
        </h2>
        <div className="streame">
          {Live.length >= 1 ? (
            Live.map((item) => {
              return (
                <div key={item.id} className="box">
                  <div className="img_live">
                    <img src={item.img_main} alt="" />
                    <div className="img_icon">
                      <p>{item.img_live}</p>
                      <div className="icon">
                        <div className="smoll_icon">
                          <i className={item.img_iconavreg}> </i>
                          <span>{item.img_avreg}</span>
                        </div>
                        <div className="smoll_icon">
                          <i className={item.img_iconnamegame}></i>
                          <span> {item.img_namegame}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content_streame">
                    <img src={item.img} alt="" />
                    <div className="text_streame">
                      <div>
                        <i className={item.icon}> </i>
                        <span>{item.iconspan}</span>
                      </div>
                      <p>{item.des}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Not Data</h1>
          )}
        </div>
        <button className="go_profile">Discover All Streams</button>
      </div>
    </div>
  );
}

export default Livestreame