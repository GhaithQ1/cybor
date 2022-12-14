import React from 'react'
import { clips } from './DataProfileclips';
import ClipsPorfile from "../css/ClipsPorfile.css";
const ClipsProfile = () => {
  return (
    <div>
      {" "}
      <div className="clips">
        {clips.length >= 1 ? (
          clips.map((item) => {
            return (
              <div key={item.id} className="box_profile">
                <img src={item.img} alt="" />
                <div className="clip">
                  <p>{item.namegame}</p>
                  <div className="icon_profile">
                    <i className={item.icon}></i>
                    <span>{item.desicon}</span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Not Data</h1>
        )}
      </div>
      <button className='butclips'>Load More Clips</button>
    </div>
  );
}

export default ClipsProfile