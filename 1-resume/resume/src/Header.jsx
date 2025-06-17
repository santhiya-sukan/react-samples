import React from "react";
import sandyy from "./assets/sandyy.png";

function Header() {
  return (
    <div className="header">
      <div className="section1">
        <img src={sandyy} alt="Profile pic" />
        <div className="text">
          <h2 className="name">Santhiya</h2>
          <h1 className="subname">Thiyagarajan</h1>
        </div>
        <div className="jobtitle">FULL STACK DEVELOPER</div>
      </div>
    </div>
  );
}

export default Header;
