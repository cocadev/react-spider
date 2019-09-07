import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "../../utils/styles";
import texts from "../../utils/fontStyle"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);
const useTexts = makeStyles(texts);

export default function Section1() {
  
  const classes = useStyles();
  const texts = useTexts();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={12}>
            <center>
              <div className={texts.h201}>SELECT YOUR PLAN</div>
              <span className={texts.h001}>No Hidden Charges<br/> Simple & Transparent Pricing</span>
              <div>
                <span className={texts.h002}>14-day</span> 
                <span className={texts.h003}> unlimited free trial. No obligation, no credit card required.</span>
              </div>
            </center>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

