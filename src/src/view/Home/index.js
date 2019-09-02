import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

import Section1 from "./Section1/index";
import Section2 from "./Section2/index";
import Section3 from "./Section3/index";
import Section4 from "./Section4/index";
import Section5 from "./Section5/index";
import Section6 from "./Section6/index";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <Parallax filter image={require("assets/img/widescreen-8.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <h4> Optimize NDIS Systems </h4>
              <h1 className={classes.title}>Innovative Solutions for NDIS Management</h1>
              <br />
              <Button
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'GET IN TOUCH'}
                <i className="fas fa-long-arrow-alt-right"></i>
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Section1 />
        </div>
        <Section2 />
        <div className={classes.container}>
          <Section3 />
        </div>
        <Section4 />
        <Section5 />
        <Section6 />

      </div>
      <Footer />
    </div>
  );
}
