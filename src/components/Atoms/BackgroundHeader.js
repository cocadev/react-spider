import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "./styles";
import Button from "components/CustomButtons/Button.js";
import classnames from 'classnames';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function BackgroundHeader(props) {
  const classes = useStyles();
  return (
    <div className={classnames(classes.background, 
      (props.background === 'tutorial' && classes.tutorial),
      (props.background === 'apps' && classes.apps),
      (props.background === 'about' && classes.about),
      (props.background === 'services' && classes.services)
    )}>
      <div className={classes.section}>
        <Grid 
          container 
          direction={props.btn && "row-reverse"}
          spacing={6}
        >
          <Grid item xs={12} sm={6} md={6}>
            <div className={classes.h01}>{props.content1}</div>
            <div className={classes.h01}>{props.content2}</div>
            <div className={classes.h02}>{props.title}</div>
            <br />
          </Grid>
          <Grid item xs={12} sm={6} md={6} className={classes.flexend}>
            { 
              props.background === 'tutorial' &&
              <div className={classes.myBtn}>
                <Button >
                  {'DOWNLOAD APP'} &nbsp;&nbsp;<i className="fab fa-google-play"></i>
                </Button>
                <Button>
                  {'DOWNLOAD APP'} &nbsp;&nbsp;<i className="fab fa-app-store"></i>
                </Button>
              </div>
            }
            { 
              props.background === 'apps' &&
              <div className={classes.myBtn2}>
                <Button >
                  {'start a free trial'} &nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
                </Button>
              </div>
            }
          </Grid>
        </Grid>
      </div>
    </div>
  );
}