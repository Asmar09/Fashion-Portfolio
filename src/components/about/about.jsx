import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Image01 from "../../assets/about/Image01.png";
import Image02 from "../../assets/about/Image02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME." />
      <p className="font12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt<br></br>ut labore et dolore magna aliqua.
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Image01} name="Butterflies and Snowflakes" job="Handmade digitally drawn extractions"/>
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Image02} name="Snowflakes & Butterflies" job="Handmade digitally drawn extractions" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;


// #FFE600