import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "../styles";

import Section1 from "./Section1";

import Footer2 from "../Footer/index2";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function AppUsagePolicy(props) {
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

      </div>
      <Footer2 />
      <Footer />
    </div>
  );
}
