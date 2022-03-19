import React from "react";
import "./styles.css";
import Splash from "./Components/Splash/Splash";
const SnapScroll = () => {
  return (
    <div>
          <h1>Dani Paskevitch</h1>
          <div className="container">
              <Splash/>
              <div key={1} className="img-box">
                <p className="photography">Photography</p>
              </div>
              <div key={2} className="img-box">
                <p className="design">Design</p>
              </div>
              <div key={3} className="img-box">
                <p className="studyCases">Study Cases</p>
              </div>
              <div key={4} className="img-box">
                <p className="footer">footer or something</p>
              </div>
          </div>
    </div>
  );
};
export default SnapScroll;