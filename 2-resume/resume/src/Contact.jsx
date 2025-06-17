import React from "react";
import SectionHeading from "./SectionHeading";

function ContactInfo(props) {
  return (
    <div className="section">
      <SectionHeading title="Contact" />
      <p><i className="bi bi-envelope-fill"></i>&nbsp;  {props?.data?.email}</p>
      <p><i className="bi bi-telephone"></i> &nbsp;{props?.data?.phone}</p>
      <p><i className="bi bi-geo-alt-fill"></i> &nbsp; {props?.data?.location}</p>
      <p><i className="bi bi-linkedin"></i> &nbsp;  {props?.data?.linkedin}</p>
    </div>
  );
}

export default ContactInfo;
