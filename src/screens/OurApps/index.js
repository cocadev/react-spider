import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderLinks from "../Header/HeaderLinks.js";
import styles from "../../utils/styles";
import Footer2 from "../Footer/index2";
import { makeStyles } from "@material-ui/core/styles";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function OurApps(props) {
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
      <div className={classNames(classes.main, classes.mainRaised)}>
        
        <Section1 />
        <div className={classes.container}>
          <Section2 />
        </div>
        <Section3 />
        <Section4 />
        <Section5 />

      </div>
      <Footer2 />
      <Footer />
    </div>
  );
}
