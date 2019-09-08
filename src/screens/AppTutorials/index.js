import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks.js";
import styles from "../../utils/styles";
import Footer from "../Footer";
import { makeStyles } from "@material-ui/core/styles";

import Section1 from "./Section1";
import Section2 from "./Section2";
import FreeTrialCard from "components/Atoms/FreeTrialCard";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function AppTutorials(props) {
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

        <FreeTrialCard 
          title={'Have Troubles When Using?'}
          description={'Feel free to contact us if you encounter issues for downloading or installing the Apps!'}
          btn={'contact us now'}
        />

      </div>
      <Footer />
    </div>
  );
}
