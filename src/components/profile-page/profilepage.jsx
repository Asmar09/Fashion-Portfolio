import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "./PageStyles/GridContainer";
import GridItem from "./PageStyles/GridItems";
import NavPills from "./PageStyles/NavPills";
import profile from "../../assets/profilePage/images/faces/anishbah.jpg";
import studio1 from "../../assets/profilePage/images/examples/studio-1.jpg";
import studio2 from "../../assets/profilePage/images/examples/studio-2.jpg";
import studio3 from "../../assets/profilePage/images/examples/studio-3.jpg";
import studio4 from "../../assets/profilePage/images/examples/studio-4.jpg";
import studio5 from "../../assets/profilePage/images/examples/studio-5.jpg";
import work1 from "../../assets/profilePage/images/examples/olu-eletu.jpg";
import work2 from "../../assets/profilePage/images/examples/clem-onojeghuo.jpg";
import work3 from "../../assets/profilePage/images/examples/cynthia-del-rio.jpg";
import work4 from "../../assets/profilePage/images/examples/mariya-georgieva.jpg";
import work5 from "../../assets/profilePage/images/examples/clem-onojegaw.jpg";

import styles from "../../assets/profilePage/profilePage";

const useStyles = makeStyles(styles);

const ProfilePage = () => {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
 <>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />   
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Anishbah Nadeem</h3>
                    <h6>FASHION DESIGNER</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              Handled woolen fabrics and designed accessories,
              Used to examine the garments on model to get better and desired results,
              Responsible for helping the workers who draw and cut the patterns,
              Attend so many fashion shows and go through garment magazines to analyze new trends, 
              customer preferences and market need.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

      </>
  );
}
export default ProfilePage