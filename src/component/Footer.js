import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_link">
        <Link className="footer_link1" to="/Home">
          Home
        </Link>
        <p>|</p>
        <Link className="footer_link1" to="/TermAndCondition">
          Terms and Conditions
        </Link>
        <p>|</p>
        <Link className="footer_link1" to="/Policy">
          Privacy Policy
        </Link>
        <p>|</p>
        <Link className="footer_link1" to="/ColStatement">
          Collection Statement
        </Link>
        <p>|</p>
        <Link className="footer_link1" to="/help">
          Help
        </Link>
        <p>|</p>
        <Link className="footer_link1" to="/help">
          Manage Account
        </Link>
      </div>
      <p className="footer_copyRight">
        Copyright &copy; 2016 DEMO Streaming All Right Reserved.
      </p>
      <div className="footer_logo">
        <div className="footer_logoLeft">
          <FacebookIcon className="footer_logoLeftIcon" fontSize="large" />
          <TwitterIcon className="footer_logoLeftIcon" fontSize="large" />
          <InstagramIcon className="footer_logoLeftIcon" fontSize="large" />
        </div>
        <div className="footer_logoRight">
          <img
            src="https://raw.githubusercontent.com/bitcot/React-Coding-Challenge/2accf56e739006feb04199bb68fdb65a1be17c61/assets/store/app-store.svg"
            alt="apple"
          />
          <img
            src="https://raw.githubusercontent.com/bitcot/React-Coding-Challenge/2accf56e739006feb04199bb68fdb65a1be17c61/assets/store/play-store.svg"
            alt="google"
          />
          <img
            className="logoRight_img"
            src="https://raw.githubusercontent.com/bitcot/React-Coding-Challenge/2accf56e739006feb04199bb68fdb65a1be17c61/assets/store/windows-store.svg"
            alt="window"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
