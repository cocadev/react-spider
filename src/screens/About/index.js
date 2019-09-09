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
          content1={'DESERT'}
          content2={'SOFTWARE'}
          background={'about'}
          title={'"The OHS Environmental & Quality Integrated Management System"'}
        />

        <div className={classes.container}>
          <ProvideDashboard
            image={require("assets/img/about-image-3.png")}
            title={'ABOUT US'}
            description={'Innovating with a Digital Mindset'}
            content={'We are a boutique digital transformation consultancy and development company.'}
            details={[]}
            explain={'Multiple businesses across Australia and the world use Desert Software, which started in 2015 Melbourne Australia. We started as projects to meet OHS requirements. Now we are the leading OHS Apps & Dashboard software provider, producing thousands of PDF files a day. We are for all types of businesses, creating innovative products that empower customers to grow.'}
          />
        </div>
        {/* <Section5 /> */}

        <BackgroundHeader 
          content1={'We Provide Flexible'}
          content2={'IT Services'}
          background={'services'}
          title={'Multiple enterprises and established brands trust our IT skills and software development.'}
        />

        <div className={classes.container}>
          <ProvideDashboard
            image={require("assets/img/card_10.png")}
            title={'WE ENGAGE IN'}
            description={'Paperless & Efficient Work Environment'}
            content={'Days of chasing paper trails are gone by using our integrated apps & dashboards.'}
            details={[]}
            explain={'With the Desert Software Apps & dashboard systems information is freely available at your fingertips. In fact completed on site with real time recordings, submissions are now easy, forms convert to PDF and sent to email and your IMS dashboard. Filing no longer needed, this system is not only affordable but succinct and direct.'}
            btn={'get in touch'}
          />
        </div>

      </div>
      <Footer />
    </div>
  );
}
