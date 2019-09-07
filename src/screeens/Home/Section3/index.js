import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "./styles";
import Carousel from "react-slick";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import classnames from 'classnames'
import { DATA1, DATA2 } from './data';

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
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.body}>
              <h5 className={classes.title}>WHAT WE RECOMMEND</h5>
              <h1 className={classes.content}>Our Top Rated Products</h1>
              <h3 className={classes.description}>Desert Software is for all types of business, creating innovative products that empower our customers to grow.</h3>

              <Carousel {...settings}>
                <center className={classes.view}>
                  {DATA1.map((item, key) => (
                    <CardItem
                      key={key}
                      img={item.img}
                      tag1={item.tag1}
                      tag2={item.tag2}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </center>
                <center className={classes.view}>
                  {DATA2.map((item, key) => (
                    <CardItem
                      key={key}
                      img={item.img}
                      tag1={item.tag1}
                      tag2={item.tag2}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </center>
              </Carousel>
            </div>
          </GridItem>

        </GridContainer>
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
