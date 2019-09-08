import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks.js";
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section5 from "./Section5";

import Footer from "../Footer/index";
import BackgroundHeader from "../../components/Atoms/BackgroundHeader";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function About(props) {
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

        <BackgroundHeader />
        <div className={classes.container}>
          <Section2 />
        </div>
        <Section5 />

      </div>
      <Footer />
    </div>
  );
}
