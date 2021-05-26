import React, { useState } from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";

import Title from "../ui-components/title/title";
// Assets
import Image01 from "../../assets/about/Image01.png";
import Image02 from "../../assets/about/Image02.png";
import ProfilePage from "../profile-page/profilepage";

const About = () => {

  const [active , setActive] = useState(false)

  return(
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT ME." />
      <p className="font12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt<br></br>ut labore et dolore magna aliqua.
      </p>
      <Row>
        <Col md={12} lg={4}>
          <div className="team__box flex-center">
            <img src={Image01} alt="person" />
            <div className="team__box-info">
              <p className="font15 weight800">Butterflies and Snowflakes</p>
              <p className="font12 weight500">
                Handmade digitally drawn extractions
              </p>
            </div>
          </div>
        </Col>
        <Col md={12} lg={4}>
          <div className="team__box flex-center">
            <img src={Image02} alt="person" />
            <div className="team__box-info">
              <p className="font15 weight800">Snowflakes & Butterflies</p>
              <p className="font12 weight500">
                Handmade digitally drawn extractions
              </p>
            </div>
          </div>
        </Col>
        <Col md={12} lg={4}>
          <div className="team__info flex-center">
            <div>
              <h4 className="font20 weight800">Little About Me</h4>
              <p className="font12 weight500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod temp orincididunt ut labore et dolore magna aliqua.
              </p>
              <div onClick={() => setActive(!active)}>
                {active === false ? (
                  <p className="font12 weight500">Read More</p>
                ) : (
                  <p className="font12 weight500">Read Less</p>
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>

    { 
     active ?  <div style={{marginTop: '30px'}}> <ProfilePage /> </div>
 : null
    }
  </div>


  )
};

export default About;

// #FFE600
