import React from "react";
import "../../assets/Gallery.css";
import A1 from "../../assets/media/A1.jpg";
import A2 from "../../assets/media/A2.jpg";
import A3 from "../../assets/media/A3.jpg";
import A4 from "../../assets/media/A4.jpg";
import A5 from "../../assets/media/A5.jpg";
import A6 from "../../assets/media/A6.jpg";
import A7 from "../../assets/media/A7.jpg";
import A8 from "../../assets/media/A8.jpg";
import A9 from "../../assets/media/A9.jpg";
import A10 from "../../assets/media/A10.jpg";
import A11 from "../../assets/media/A11.jpg";
import A12 from "../../assets/media/A12.jpg";
import A13 from "../../assets/media/A13.jpg";
import A14 from "../../assets/media/A14.jpg";
import A15 from "../../assets/media/A15.jpg";
import A16 from "../../assets/media/A16.jpg";
import V2 from "../../assets/media/V2.mp4";
import V1 from "../../assets/media/V1.mp4";
import V3 from "../../assets/media/V3.mp4";
import V4 from "../../assets/media/V4.mp4";
import V5 from "../../assets/media/V5.mp4";
import V6 from "../../assets/media/V6.mp4";
import V7 from "../../assets/media/V7.mp4";
import V8 from "../../assets/media/V8.mp4";
import V9 from "../../assets/media/V9.mp4"

const Gallery = () => {
  return (
    <div>
      {/* <h1>This is our Gallery</h1> */}
      <div className="list">
      <div className="griditem"><video autoPlay loop muted >
          <source src={V5} type="video/mp4" />
        </video></div>
        <div className="griditem">
          <img src={A1}></img>
        </div>
        <div className="griditem">
          <img src={A2}></img>
        </div>
        <div className="griditem"><video autoPlay loop muted >
          <source src={V1} type="video/mp4" />
        </video></div>
        <div className="griditem">
          <img src={A3}></img>
        </div>
        <div className="griditem">
          <img src={A4}></img>
        </div>
        <div className="griditem">
          <img src={A5}></img>
        </div>
        <div className="griditem"><video autoPlay loop muted >
          <source src={V2} type="video/mp4" />
        </video></div>
        <div className="griditem">
          <img src={A6}></img>
        </div>
        <div className="griditem">
          <img src={A7}></img>
        </div>
        <div className="griditem"><video autoPlay loop muted >
          <source src={V8} type="video/mp4" />
        </video></div>
        <div className="griditem">
          <img src={A8}></img>
        </div>
        <div className="griditem">
          <img src={A9}></img>
          <div className="griditem"><video autoPlay loop muted >
          <source src={V6} type="video/mp4" />
        </video></div>
        </div>
        <div className="griditem">
          <img src={A10}></img>
        </div>
        <div className="griditem"><video autoPlay loop muted >
          <source src={V3} type="video/mp4" />
        </video></div>
        <div className="griditem">
          <img src={A11}></img>
        </div>
        <div className="griditem">
          <img src={A12}></img>
        </div>
        <div className="griditem"><video autoPlay loop muted >
          <source src={V4} type="video/mp4" />
        </video></div>
        <div className="griditem">
          <img src={A13}></img>
        </div>
        <div className="griditem">
          <img src={A14}></img>
        </div>
        <div className="griditem">
          <img src={A15}></img>
        </div>
        <div className="griditem"><video autoPlay loop muted >
          <source src={V7} type="video/mp4" />
        </video></div>
        <div className="griditem">
          <img src={A16}></img>
        </div>
        <div className="griditem"><video autoPlay loop muted >
          <source src={V9} type="video/mp4" />
        </video></div>
        
        
        
        
        
        
      </div>
    </div>
  );
};

export default Gallery;
