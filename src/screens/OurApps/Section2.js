import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "../../utils/styles";
import classnames from 'classnames'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function Section2() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <img className={classes.img} src={require("assets/img/marketing-image-4.png")} alt={'{frontend image}'} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className={classes.body}>
              <h5 className={classes.h5}>WHAT WE PROVIDE</h5>
              <h1 className={classes.h2}>Integrated Dashboard Management Systems</h1>
              <h3 className={classes.h3}>With integrated dashboard you can keep documents safe and secure. All reports are date sensitive with easier access.</h3>
              <Item title={'Personalised Design'} content={'Do the way your company desires with the chosen apps and customized forms.'}/>
              <Item title={'Compatible Systems'} content={'Run through multiple devices including desktops, tablets and mobile phones.'}/>
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
      <h4 className={classes.h4}>
        <i className={classnames("fa fa-check", classes.pink)}></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.title}
      </h4>
      <p className={classnames(classes.h6, classes.ml)}>{props.content}</p>
    </div>
  )
}