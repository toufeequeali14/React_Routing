import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/log.png";
import fb from "../assets/images/fb.png";
import ytb from "../assets/images/ytb.jpg";
import tw from "../assets/images/tw.jpg";
import lnkd from "../assets/images/lknd.jpg";

const Footer = () => {
  return (
    <div className="container footer-color footer-margin">
      <div className="row">
        <div className="col col-sm-12 col-md-4 col-lg-4">
          <div className="logo-margin">
            <img src={logo} alt="Profile"></img>
          </div>

          <div className="logo-margin">
            <p style={{ color: "white" }}>
              {" "}
              <b> Nostrud exercitation laboris nisi</b>
            </p>
            <p style={{ color: "white" }}>
              {" "}
              <b> ut aliquip </b>
            </p>
          </div>

          {/* <div className="logo-margin">
          <img src={fb} alt="Profile"></img>
          <img src={lnkd} alt="Profile"></img>
          <img src={tw} alt="Profile"></img>
          </div> */}

          <div
            className="logo-margin "
            style={{ display: "flex", marginTop: "2rem" }}
          >
            <img
              src={fb}
              alt="Facebook"
              style={{ width: "50px", height: "50px", marginRight: "60px" }}
            />
            <img
              src={lnkd}
              alt="LinkedIn"
              style={{ width: "50px", height: "50px", marginRight: "60px" }}
            />
            <img
              src={tw}
              alt="Twitter"
              style={{ width: "50px", height: "50px", marginRight: "60px" }}
            />

            <img
              src={ytb}
              alt="Twitter"
              style={{ width: "50px", height: "50px" }}
            />
          </div>

          <br />
          <br />
        </div>
        {/* ########################################################################### */}
        <div
          className="col col-sm-12 col-md-4 col-lg-4 text-center"
          style={{ color: "white" }}
        >
          <h2>Company</h2> <br />
          <h5>Home</h5> <br />
          <h5>ABOUT US</h5>
          <br />
          <h5>BOOKS</h5>
          <br />
          <h5>NEW RELEASE</h5>
          <br />
          <h5>CONTACT US</h5>
          <br />
          <h5>BLOG</h5>
        </div>
        {/* ////////////////////////////////////////////////////////////////////// */}
        <div
          className="col col-sm-12 col-md-4 col-lg-4"
          style={{ color: "white" }}
        >
          <h2>IMPORTANT LINKS</h2> <br />
          <h5>Privacy Policy</h5> <br />
          <h5>FAQs</h5>
          <br />
          <h5>Terms of Services</h5>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
        </div>
        {/* /////////////////////////////////////////////////////////////////////// */}
      </div>

      {/* 2nd row #########################################################*/}
      <div className="row" style={{ color: "white" }}>
  <div className="col col-sm-12 col-md-4 col-lg-4">
    <b>© 2022 Alright. All Rights Reserved.</b>
  </div>

  <div className="col col-sm-12 col-md-4 col-lg-4">
  </div>

  <div className="col col-sm-12 col-md-4 col-lg-4">
    <h5> Privacy | Terms of Service</h5>
  </div>



</div>
<br />
<br />
<br />
<br />
<br />
<br />
          


      {/* 2nd row end ////////////////////////////////////////////////// */}
    </div>
  );
};

export default Footer;
