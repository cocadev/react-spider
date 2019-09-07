import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderLinks from "../Header/HeaderLinks.js";
import styles from "../../utils/styles";
import Section1 from "./Section1";
import Footer2 from "../Footer/index2";
import { makeStyles } from "@material-ui/core/styles";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function PrivacyPolicy(props) {
  
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
