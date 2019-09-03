import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "./styles";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import Section1 from "./Section1/index";
import Section2 from "./Section2/index";
import Section3 from "./Section3/index";
import Section4 from "./Section4/index";
import Section5 from "./Section5/index";
import Section6 from "./Section6/index";
import Footer2 from "../Footer/index2";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [classicModal, setClassicModal] = React.useState(false);

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <Parallax filter image={require("assets/img/widescreen-8.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <h4> Optimize NDIS Systems </h4>
              <h1 className={classes.title}>Innovative Solutions for NDIS Management</h1>
              <br />
              <Button
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {'GET IN TOUCH'}
                <i className="fas fa-long-arrow-alt-right"></i>
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
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
      <Footer2 />
      <Footer />
      <Button
        className={classes.modalBtn}
        color="primary"
        round
        onClick={() => setClassicModal(true)}
      >
        <i className="fa fa-envelope"></i>
      </Button>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={classicModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setClassicModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setClassicModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          <h4 className={classes.modalTitle}>Get a free trial or ask more about our services?</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <form className={classes.form}>
            <p className={classes.divider}>Leave us a message and we will contact you quickly.</p>
            <CardBody>

              <GridContainer justify="center">
                <GridItem xs={12} sm={6} md={4}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <CustomInput
                    labelText="Subject"
                    id="subject"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Message"
                    textarea={true}
                    id="message"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button simple color="primary" size="lg">
                Send Message 
              </Button>
            </CardFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
