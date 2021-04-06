import React from "react";
import city from "../../image.jpg";
import "./postbox.css";

export default function PostBox() {
  return (
    <div className="box">
      <img src={city} alt="img1" className="image" />
      <div className="post-info">
        <p className="small-title">
          Before that let's tes this out, There is some thing should be!
        </p>
        <p className="tag">Asia</p>
      </div>
    </div>
  );
}
