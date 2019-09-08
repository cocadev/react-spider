import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "./styles";
import classnames from 'classnames'
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function FreeTrialCard(props) {

  const classes = useStyles();

  return (
      
      <div className={classes.section}>
        <div className={classnames(classes.card)}>
          <Grid container alignItems='center'>
            <Grid item xs={12} sm={12} md={7}>
              <h1 className={classes.h1}>{props.title}</h1>
              <h1 className={classes.h2}>{props.description}</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <div className={classes.body}>
                <Button color="pink" size='lg'>
                  {props.btn}&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
  );
}
