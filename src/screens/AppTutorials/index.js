import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks.js";
import styles from "../../utils/styles";
import Footer from "../Footer";
import { makeStyles } from "@material-ui/core/styles";

import FreeTrialCard from "components/Atoms/FreeTrialCard";
import ProvideDashboard from "../../components/Atoms/ProvideDashboard";
import BackgroundHeader from "components/Atoms/BackgroundHeader";

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

        {/* <Section1 /> */}
        <BackgroundHeader 
          content1={'Available on iOS &'}
          content2={'Android Systems'}
          title={'Start your first simple paper free checklist now!'}
          btn={true}
          background={'tutorial'}
        />

        <div className={classes.container}>
          <ProvideDashboard
            image={require("assets/img/marketing-image-4.png")}
            title={'EASY TO USE'}
            description={'Start Your First Paperless Checklist'}
            content={'All Apps have date, time and GPS location stamp. Most Apps have photo-attached and electronic signature features.'}
            details={[]}
            btn={'download free trial'}
            reverse={true}
          />
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
