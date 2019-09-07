import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "../styles";
import texts from "../../utils/fontStyle"

const useStyles = makeStyles(styles);
const useTexts = makeStyles(texts);

export default function Section1() {
  
  const classes = useStyles();
  const texts = useTexts();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <center>
              <div className={texts.h201}>SELECT YOUR PLAN</div>
              <span className={texts.h001}>No Hidden Charges<br/> Simple & Transparent Pricing</span>
              <div>
                <span className={texts.h002}>14-day</span> 
                <span className={texts.h003}> unlimited free trial. No obligation, no credit card required.</span>
              </div>
            </center>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

