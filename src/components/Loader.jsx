import React from "react";
import herobg from "../assets/images/hero-bg.gif";

export default function Loader() {
  return (
    <div className="loader-screen">
      <div className="loader-wave">
        <img src={herobg} alt="" />
      </div>
      <div className="loader-center">
        <h2>Jatin Chauhan</h2>
        <p>Lead UX Designer + Frontend Designer</p>
        <span className="loader-line" aria-hidden="true" />
      </div>
    </div>
  );
}
