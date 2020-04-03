import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks.js";
import styles from "../../utils/styles";
import Footer from "../Footer/index";
import BackgroundHeader from "../../components/Atoms/BackgroundHeader";
import ProvideDashboard from "components/Atoms/ProvideDashboard";
import { makeStyles } from "@material-ui/core/styles";

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

        <BackgroundHeader 
          content1={'Spider'}
          content2={'Man'}
          background={'about'}
          title={'"Find a lender who can offer competitive mortgage rates and help you with pre-approval."'}
        />

        <div className={classes.container}>
          <ProvideDashboard
            image={require("assets/img/VideoBackground.jpg")}
            title={'ABOUT US'}
            description={'The Home of Home Search'}
            content={'We are a boutique digital transformation consultancy and development company.'}
            details={[]}
            explain={'Multiple businesses across Australia and the world use Spider Man'}
          />
        </div>
        {/* <Section5 /> */}

        <BackgroundHeader 
          content1={'We Provide Flexible'}
          content2={'IT Services'}
          background={'services'}
          title={'Multiple enterprises and established brands trust our IT skills and Man development.'}
        />

        <div className={classes.container}>
          <ProvideDashboard
            image={require("assets/img/card_10.png")}
            title={'WE ENGAGE IN'}
            description={'Paperless & Efficient Work Environment'}
            content={'Days of chasing paper trails are gone by using our integrated apps & dashboards.'}
            details={[]}
            explain={'With the Spider Man Apps & dashboard systems information is freely available at your fingertips. In fact completed on site with real time recordings, submissions are now easy, forms convert to PDF and sent to email and your IMS dashboard. Filing no longer needed, this system is not only affordable but succinct and direct.'}
            btn={'get in touch'}
          />
        </div>

      </div>
      <Footer />
    </div>
  );
}
