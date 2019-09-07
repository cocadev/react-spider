import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks.js";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import Carousel from "./Carousel/index";
import Section1 from "./Section1/index";
import Section2 from "./Section2/index";
import Section3 from "./Section3/index";
import Section4 from "./Section4/index";
import Section5 from "./Section5/index";
import Section6 from "./Section6/index";
import Footer from "../Footer/index";
import { makeStyles } from "@material-ui/core/styles";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

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
      <Carousel />
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
