import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "./styles";
import classnames from 'classnames'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function Section2() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.section}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <img className={classes.img} src={require("assets/img/front-img.png")} alt={'{frontend image}'} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className={classes.body}>
              <h5 className={classes.title}>WHAT WE DO</h5>
              <h3 className={classes.description}>Desert Software is for all types of business, creating innovative products that empower our customers to grow.</h3>
              <Item title={'OHS Management Systems'} content={'We develop Apps with dashboards to help customers complete OHS audit.'}/>
              <Item title={'IT Services & Consultancy'} content={'We use the latest technologies to design the products the customers need.'}/>
              <Item title={'NDIS Audit Systems'} content={'We provide modern software development practices for NDIS providers without outdated paper systems.'}/>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <div className="list" >
      <h4 className={classes.item}>
        <i className={classnames("fa fa-check", classes.pink)}></i>
        {props.title}
      </h4>
      <p className={classes.itemContent}>{props.content}</p>
    </div>
  )
}