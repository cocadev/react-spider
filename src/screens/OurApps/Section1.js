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
          <Grid item xs={12} sm={6} md={6}>
            <h4 className={classes.content}>{'Integrated Management Systems For OHS'}</h4>
            <h4 className={classes.title}>{'"We digitise paper work for searchable online documents."'}</h4>
            <br /><br />

          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Button className={classes.myBtn}>
                {'START A FREE TRIAL'}
                &nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
