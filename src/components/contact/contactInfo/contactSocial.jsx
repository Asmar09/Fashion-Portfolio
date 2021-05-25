import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import InstagramIcon from "../../../assets/contact/instagram.svg";
import LinkedinIcons from "../../../assets/contact/linkedin.svg";
import snapchatIcon from "../../../assets/contact/snapchat.svg";


const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
        <a href="https://www.instagram.com/anishbahnadeem30/"><img src={InstagramIcon} alt="instagram" /></a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
        <a href="https://www.linkedin.com/in/anishbah-nadeem-ba2b15212/"><img src={LinkedinIcons} alt="linkedin" /></a>
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <img src={snapchatIcon} alt="snapchat" />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
