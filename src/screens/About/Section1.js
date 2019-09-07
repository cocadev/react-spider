import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from "components/CustomButtons/Button.js";
import styles from "../../utils/styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function Section1() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.section}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={7}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button className={classes.myBtn}>
                {'DOWNLOAD APP'} &nbsp;&nbsp;&nbsp;&nbsp;<i className="fab fa-google-play"></i>
              </Button>
              <Button className={classes.myBtn}>
                {'DOWNLOAD APP'} &nbsp;&nbsp;&nbsp;&nbsp;<i className="fab fa-app-store"></i>
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <h4 className={classes.content}>{'Available on iOS & Android Systems'}</h4>
            <h4 className={classes.title}>{'Start your first simple paper free checklist now!'}</h4>
            <br /><br />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}