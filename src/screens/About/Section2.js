import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "../../utils/styles";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function Section2() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.body}>
              <h5 className={classes.h5}>EASY TO USE</h5>
              <h1 className={classes.h2}>Start Your First Paperless Checklist</h1>
              <h3 className={classes.h3}>All Apps have date, time and GPS location stamp. Most Apps have photo-attached and electronic signature features.</h3>
              <Button color="pink" size='lg'>
              {'download free trial'}
              &nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-arrow-alt-circle-down"></i>
            </Button>
            
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <img className={classes.img} src={require("assets/img/marketing-image-4.png")} alt={'{frontend image}'} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}