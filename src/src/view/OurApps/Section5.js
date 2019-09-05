import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "../styles";
// import classnames from 'classnames'

const useStyles = makeStyles(styles);

export default function Section5() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.section}>
        <GridContainer alignItems='center'>
          <GridItem xs={12} sm={12} md={5}>
            <center>
              <img className={classes.imgPhone} src={require("assets/img/tur/ESIQ/esiq1.png")} alt={'{frontend image}'} />
            </center>
          </GridItem>
          <GridItem xs={12} sm={12} md={7}>
            <div className={classes.body}>
              <h5 className={classes.h5}>EASY TO USE</h5>
              <h1 className={classes.h2}>Start Your First Paperless Checklist</h1>
              <h3 className={classes.h3}>All Apps have date, time and GPS location stamp. Most Apps have photo-attached and electronic signature features.</h3>
            </div>
          </GridItem>

        </GridContainer>
      </div>
    </div>
  );
}

// function Item(props) {
//   const classes = useStyles();
//   return (
//     <div className="list" >
//       <h4 className={classes.h4}>
//         <i className={classnames("fa fa-check", classes.pink)}></i>
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.title}
//       </h4>
//       <p className={classnames(classes.h6, classes.ml)}>{props.content}</p>
//     </div>
//   )
// }