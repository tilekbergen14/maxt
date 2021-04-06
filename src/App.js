import React from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import city from "./image.jpg";
import PostBox from "./components/postbox/PostBox";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <h3 className="title">Welcome to MaxT.kz</h3>
        <div className="news-container">
          <div className="big-box">
            <img src={city} alt="img1" className="big-image" />
            <div className="big-post-info">
              <p className="big-title">There is some thing should be!</p>
              <p className="big-tag">Asia</p>
            </div>
          </div>
          <div className="right-box">
            <PostBox />
            <PostBox />
            <PostBox />
            <PostBox />
          </div>
        </div>
      </div>
    </div>
  );
}
