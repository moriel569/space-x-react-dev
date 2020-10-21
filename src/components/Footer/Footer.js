import React from "react";
import "./footer.css";
import logo from "../../logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <img src={logo} alt="logo Space X" classNameName="logo" />
        <nav classNameName="footer-nav">
          <ul className="list">
            <li className="item">
              <a
                href="/"
                rel="noopener noreferrer"
                target="_blank"
                className="item-link"
              >
                Elon Musk Twitter
              </a>
            </li>
            <li className="item">
              <a
                href="/"
                rel="noopener noreferrer"
                target="_blank"
                className="item-link"
              >
                Twitter
              </a>
            </li>
            <li className="item">
              <a
                href="/"
                rel="noopener noreferrer"
                target="_blank"
                className="item-link"
              >
                Flickr
              </a>
            </li>
            <li className="item">
              <a
                href="/"
                rel="noopener noreferrer"
                target="_blank"
                className="item-link"
              >
                Website
              </a>
            </li>
          </ul>
        </nav>
        <p className="footer-text">
          For additional questions, contact
          <a className="footer-link" href="/">
            rideshare@spacex.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
