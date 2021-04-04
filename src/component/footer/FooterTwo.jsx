import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";
import logo from '../../assets/images/logo/logo.svg'

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/zacthehobbit" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/zacthehobbit" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/zacthehobbit" },
  { Social: <FaTwitter />, link: "https://twitter.com/zacthehobbit" },
  { Social: <FaGithub />, link: "https://github.com/zacthehobbit" }
];

const FooterTwo = () => {
  return (
    <div
      className="footer-style-2 ptb--30 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <a href="/">
                  <img
                    style={{ height: "36px" }}
                    src={logo}
                    alt="Logo images"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
