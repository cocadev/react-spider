import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderLinks from "../Header/HeaderLinks";
import styles from "../styles";
import Slide from "@material-ui/core/Slide";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Footer2 from "../Footer/index2";
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
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Section1 />
        <div className={classes.container}>
        </div>
        <Section2 />

      </div>
      <Footer2 />
      <Footer />
    </div>
  );
}
