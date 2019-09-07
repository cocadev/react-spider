import React from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import styles from "./styles"

const useStyles = makeStyles(styles);

export default function Section1() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              backImg={classes.card1}
              iconCss={classes.icon1}
              icon={'engineering.png'}
              title={'OHS Management Systems'}
              titleCss={classes.title}
              learn={classes.learn1}
              descriptionCss={classes.description}
              description={'Fully integrated Apps with dashboard allows tracking completion of OHS requirements on a daily basis.'}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              backImg={classes.card2}
              iconCss={classes.icon2}
              icon={'server.png'}
              title={'IT Services'}
              titleCss={classes.title}
              learn={classes.learn2}
              descriptionCss={classes.description}
              description={'We help with everyday IT management and strategic planning by providing effective answers to customers\' needs.'}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              backImg={classes.card3}
              icon={'ux-1.png'}
              iconCss={classes.icon3}
              title={'NDIS Systems'}
              titleCss={classes.title3}
              learn={classes.learn3}
              descriptionCss={classes.description3}
              description={'We are here to design the NDIS Audit Software and Apps customers need away with outdated paper system.'}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function Card(props) {
  return <div className={props.backImg}>
    <img src={require("assets/img/" + props.icon)} alt="{icon}" className={props.iconCss} />
    <h4 className={props.titleCss}>{props.title}</h4>
    <p className={props.descriptionCss}>{props.description}</p>
    <Link to='/About'>
      <p className={props.learn}>
        <i className="fas fa-long-arrow-alt-right"></i> LEARN MORE
      </p>
    </Link>
  </div>
}

