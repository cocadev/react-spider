import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "../Home/Section3/styles";
import Carousel from "react-slick";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import classnames from 'classnames'
import { makeStyles } from "@material-ui/core/styles";
import { OurApps } from "utils/static";

const useStyles = makeStyles(styles);

export default function Section4() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <Grid Container>
        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.body}>

            <h5 className={classes.title}>WHAT YOU NEED</h5>
            <h1 className={classes.content}>Our Top Rated Products</h1>

            <Carousel {...settings}>
              {OurApps.map((item, key) => (
                <CardItem
                  key={key}
                  img={item.img}
                  tag1={item.tag1}
                  tag2={item.tag2}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Carousel>

          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function CardItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.shopBox}>
      <div className={classes.tagView}>
        <span className={classes.tag}>{props.tag1}</span>
        {
          props.tag2 && <span className={classnames(classes.tag, classes.left)}>{props.tag2}</span>
        }
      </div>
      <img
        className={classes.imgCardTop}
        src={require('assets/img/logo/' + props.img)}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>{props.title}</h4>
        <div className={classes.hr} />
        <p className={classes.description}>{props.description}</p>
      </CardBody>
    </Card>
  )
}
