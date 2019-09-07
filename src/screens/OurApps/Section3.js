import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "../../utils/styles";
import classnames from 'classnames'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function Section3() {

  const classes = useStyles();
  
  return (
    <div className={classes.back}>
      <div className={classes.section}>
        <div >
          <h5 className={classes.h5}>WHAT WE EXCEL</h5>
          <h1 className={classes.h2}>Building Paperless &<br /> Efficient Work Environment</h1>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <Card
                img="feature-1.png"
                backImg={classnames(classes.card, classes.cardBg1)}
                width={82}
                height={150}
                title={'Paper Free Systems'}
                description={'Forms converted to PDF files with OHS Apps at your fingertips as manual filling is no longer needed.'}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card
                img="feature-2.png"
                backImg={classnames(classes.card, classes.cardBg2)}
                width={180}
                height={150}
                title={'Dashboard Management'}
                description={'Apps fully integrated with IMS Dashboard allow managers to track the completion of the OHS requirements.'}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card
                img="feature-3.png"
                backImg={classnames(classes.card, classes.cardBg3)}
                width={110}
                height={150}
                title={'Onsite Assessment'}
                description={'Completed on site with real time recordings, submissions are now easy with built-in GPS & stamps.'}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  const classes = useStyles();
  return <div className={props.backImg}>
    <img src={require('assets/img/' + props.img)} alt="{image}" style={{ width: props.width, height: props.height, marginBottom: 20 }} />
    <h4 className={classes.h4}>{props.title}</h4>
    <p className={classes.h6} style={{ textAlign: 'center' }}>{props.description}</p>
  </div>
}

