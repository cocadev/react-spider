import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "../../utils/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function BackgroundHeader() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.section}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.content}>{'DESERT SOFTWARE'}</div>
            <div className={classes.title}>{'"The OHS Environmental & Quality Integrated Management System"'}</div>
            <br /><br />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}