import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "./styles";
import Button from "components/CustomButtons/Button.js";
import Carousel from "react-slick";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function Section2() {
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
    <div className={classes.section}>
      <div className={classes.container}>
        <Grid container>
          <Grid xs={12} sm={12} md={4}>
            <h5 className={classes.title}>TESTIMONIALS</h5>
            <h1 className={classes.content}>What People Say About Us</h1>
            <h3 className={classes.quote}>We always listen to our customers</h3>
            <Button>
              {'GET IN TOUCH'}
              &nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <center className={classes.body}>
              <Carousel {...settings}>
                <div>
                  <Item title={'Ultimate Group'} />
                  <Item title={'Road Master'} />
                </div>
                <div>
                  <Item title={'Asphaltech'} />
                  <Item title={'LincRoads'} />
                </div>
              </Carousel>
            </center>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardBody>
        <div className={classes.box}>
          <i className="fa fa-quote-left" />
        </div>
        <h4 className={classes.cardTitle}>{props.title}</h4>
        <h4 className={classes.company}>{'Client of Company'}</h4>
        <div className={classes.hr} />
        <p className={classes.description}>{'"We are a full-lifecycle Man development company that combines Experience Design, Complex Engineering to give you the best Man product."'}</p>
      </CardBody>
    </Card>
  )
}