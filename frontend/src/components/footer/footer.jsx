import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./footer.css";
import { FaRegCopyright } from "react-icons/fa6";

const footerData = [
  {
    heading: "Abstract",
    links: [
      {
        text: "Branches",
        url: "/",
      },
    ],
  },
  {
    heading: "Resources",
    links: [
      {
        text: "Blog",
        url: "/",
      },
      {
        text: "Help Center",
        url: "/",
      },
      {
        text: "Release Notes",
        url: "/",
      },
      {
        text: "Status",
        url: "/",
      },
    ],
  },
  {
    heading: "Community",
    links: [
      {
        text: "Twiiter",
        url: "/",
      },
      {
        text: "Linkedin",
        url: "/",
      },
      {
        text: "Facebook",
        url: "/",
      },
      {
        text: "Dribble",
        url: "/",
      },
      {
        text: "Podcast",
        url: "/",
      },
    ],
  },
  {
    heading: "Company",
    links: [
      {
        text: "About Us",
        url: "/",
      },
      {
        text: "Careers",
        url: "/",
      },
      {
        text: "Legal",
        url: "/",
      },
    ],
    subHeading: {
      text: "Contact Us",
      subText: "info@abstract.com",
    },
  },
];

const Footer = () => {
  return (
    <footer>
      {footerData.map((curr, id) => {
        return (
          <div id="footer-Data" key={id}>
            <h3>{curr.heading}</h3>
            {curr.links.map((links) => {
              return <NavLink to={links.url}>{links.text}</NavLink>;
            })}
            {curr?.subHeading && (
              <div>
                <h4>{curr.subHeading.text}</h4>
                <p>{curr.subHeading.subText}</p>
              </div>
            )}
          </div>
        );
      })}
      <div id="copyright">
          <img src={logo} alt="logo" />
          <div>
          <FaRegCopyright />
            <p>Copyright 2022</p>  
          </div>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
