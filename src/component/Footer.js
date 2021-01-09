import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_link">
        <Link to="/Home">Home</Link>
        <p>|</p>
        <Link to="/TermAndCondition">Terms and Conditions</Link>
        <p>|</p>
        <Link to="/Policy">Privacy Policy</Link>
        <p>|</p>
        <Link to="/ColStatement">Collection Statement</Link>
        <p>|</p>
        <Link to="/help">Help</Link>
      </div>
    </div>
  );
}

export default Footer;
