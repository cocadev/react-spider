import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "./styles";
import Button from "components/CustomButtons/Button.js";
import Carousel from "react-slick";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

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
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <h5 className={classes.title}>TESTIMONIALS</h5>
            <h1 className={classes.content}>What People Say About Us</h1>
            <h3 className={classes.quote}>We always listen to our customers</h3>
            <Button
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {'GET IN TOUCH'}
              <i className="fas fa-long-arrow-alt-right"></i>
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <div className={classes.body}>
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
            </div>
          </GridItem>
        </GridContainer>
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
        <h4 >{'Client of Company'}</h4>
        <div className={classes.hr} />
        <p className={classes.description}>{'"We are a full-lifecycle software development company that combines Experience Design, Complex Engineering to give you the best software product."'}</p>
      </CardBody>
    </Card>
  )
}