import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import Footer from "../Footer";
import HeaderLinks from "../Header/HeaderLinks.js";
import styles from "../../utils/styles";
import { makeStyles } from "@material-ui/core/styles";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import FreeTrialCard from "../../components/Atoms/FreeTrialCard";
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
        <FreeTrialCard 
          title={'Start 14 Days Free Trial'}
          description={'Try fully functioning OHS management systems today with no risk and no obligation!'}
          btn={'get started now'}
        />

      </div>
      <Footer />
    </div>
  );
}
