import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "../../utils/styles";
import Carousel from "react-slick";
import classnames from 'classnames'
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function Section5() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div>
      <div className={classes.section}>
        <Grid container alignItems='center'>
          <Grid item xs={12} sm={12} md={5}>
            <Carousel {...settings}>
              <img src={require("assets/img/tur/ESIQ/esiq1.png")} alt={'{frontend image}'} />
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <div className={classes.body}>
              <h5 className={classes.h5}>EASY TO USE</h5>
              <h1 className={classes.h2}>Start Your First Paperless Checklist</h1>
              <h3 className={classes.h3}>All Apps have date, time and GPS location stamp. Most Apps have photo-attached and electronic signature features.</h3>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.section}>
        <div className={classnames(classes.card, classes.cardBg3)}>
          <Grid container alignItems='center'>
            <Grid item xs={12} sm={12} md={7}>
              <h1 className={classes.h7}>Start 14 Days Free Trial</h1>
              <h3 className={classes.h3}>Try fully functioning OHS management systems today with no risk and no obligation!</h3>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <div className={classes.body}>
                <Button color="primary">
                  GET STARTED NOW&nbsp;&nbsp;<i className="fas fa-paper-plane"></i>
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
