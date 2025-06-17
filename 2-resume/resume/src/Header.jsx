import React from "react";
import sandyy from "./assets/sandyy.png"; // or '../assets/sandyy.png' based on file location

function Header(props) {
  return (
    <div className="header">
      <div className="section1">
        <img src={sandyy} alt="Profile pic" />
        <div className="text">
          <h2 className="name">{props?.data?.name}</h2>
          <h1 className="subname">{props?.data?.subname}</h1>
        </div>
        <div className="jobtitle">{props?.data?.jobTitle}</div>
      </div>
    </div>
  );
}

export default Header;
