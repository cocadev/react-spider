import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import Footer from "../Footer";
import HeaderLinks from "../Header/HeaderLinks.js";
import styles from "../../utils/styles";
import Section3 from "./Section3";
import Section4 from "./Section4";
import FreeTrialCard from "../../components/Atoms/FreeTrialCard";
import ProvideDashboard from "components/Atoms/ProvideDashboard";
import BackgroundHeader from "components/Atoms/BackgroundHeader";
import { OurAppsPhoneImages } from "utils/static";
import { makeStyles } from "@material-ui/core/styles";
import ProvideCarousel from "components/Atoms/ProvideCarousel";

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
        
        <BackgroundHeader
          content1={'Integrated Management'}
          content2={'Systems For OHS'}
          background={'apps'}
          title={'"We digitise paper work for searchable online documents."'}
        />

        <div className={classes.container}>
          <ProvideDashboard 
            image={require("assets/img/marketing-image-4.png")}
            title={'WHAT WE PROVIDE'}
            description={'Integrated Dashboard Management Systems'}
            content={'With integrated dashboard you can keep documents safe and secure. All reports are date sensitive with easier access.'}
            details={[
              { title: 'Personalised Design', content: 'Do the way your company desires with the chosen apps and customized forms.'},
              { title: 'Personalised Design', content: 'Do the way your company desires with the chosen apps and customized forms.'}
            ]}
          />
        </div>

        <Section3 />
        
        <Section4 />

        <div className={classes.container}>
          <ProvideCarousel
            image={require("assets/img/marketing-image-4.png")}
            phones={OurAppsPhoneImages}
            title={'EASY TO USE'}
            description={'Start Your First Paperless Checklist'}
            content={'All Apps have date, time and GPS location stamp. Most Apps have photo-attached and electronic signature features.'}
            explain={null}
            details={[]}
          />
        </div>

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
