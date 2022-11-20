import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="mb-5 flex justify-between items-center">
      <div className="text-white flex">
        <SocialIcon
          className="ml-3 first:ml-0"
          url="https://twitter.com/coderyunus"
          bgColor="white"
          style={{ height: "30px", width: "30px" }}
        />
        <SocialIcon
          className="ml-3 first:ml-0"
          url="https://www.instagram.com/ynsalc/"
          bgColor="white"
          style={{ height: "30px", width: "30px" }}
        />
        <SocialIcon
          className="ml-3 first:ml-0"
          url="https://www.linkedin.com/in/ynsalc/"
          bgColor="white"
          style={{ height: "30px", width: "30px" }}
        />
        <SocialIcon
          className="ml-3 first:ml-0"
          url="https://www.github.com/ynsalc/"
          bgColor="white"
          style={{ height: "30px", width: "30px" }}
        />
      </div>
      <p className="text-white text-p">yunusac51@gmail.com</p>
    </footer>
  );
};

export default Footer;
