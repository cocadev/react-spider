import React from "react";
import classNames from "classnames";
import Header from "./Header/Header";
import HeaderLinks from "./Header/HeaderLinks";
import styles from "../utils/styles";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

import notFound from 'assets/img/404.jpg'

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function NoMatch(props) {
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
        <img src={notFound} alt="{not found}" className={classes.imgFluid}/>
      </div>

    </div>
  );
}


