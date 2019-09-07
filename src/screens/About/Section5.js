import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "../../utils/styles";
import classnames from 'classnames'
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function Section5() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.section}>
        <div className={classnames(classes.card, classes.cardBg3)}>
          <Grid container alignItems='center'>
            <Grid item xs={12} sm={12} md={7}>
              <h1 className={classes.h7}>Have Troubles When Using?</h1>
              <h3 className={classes.h3}>Feel free to contact us if you encounter issues for downloading or installing the Apps!</h3>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <div className={classes.body}>
                <Button color="pink" size='lg'>
                  contact us now&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}