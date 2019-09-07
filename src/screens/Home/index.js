import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Grid from '@material-ui/core/Grid';
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "../Header/HeaderLinks.js";
import styles from "./styles";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import Carousel from "./Carousel/index";
import Section1 from "./Section1/index";
import Section2 from "./Section2/index";
import Section3 from "./Section3/index";
import Section4 from "./Section4/index";
import Section5 from "./Section5/index";
import Section6 from "./Section6/index";
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
      <Footer2 />
      <Footer />
      <Button
        className={classes.modalBtn}
        color="primary"
        justIcon
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

              <Grid container justify="center">
                <Grid item xs={12} sm={6} md={4}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CustomInput
                    labelText="Subject"
                    id="subject"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Message"
                    textarea={true}
                    id="message"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </Grid>
              </Grid>
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button color="primary">
                Send Message 
              </Button>
            </CardFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
