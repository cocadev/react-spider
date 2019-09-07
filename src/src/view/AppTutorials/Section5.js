import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "../styles";
import classnames from 'classnames'
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function Section5() {
  const classes = useStyles();

  return (
    <div>

      <div className={classes.section}>
        <div className={classnames(classes.card, classes.cardBg3)}>

          <GridContainer alignItems='center'>
            <GridItem xs={12} sm={12} md={7}>
              <h1 className={classes.h7}>Have Troubles When Using?</h1>
              <h3 className={classes.h3}>Feel free to contact us if you encounter issues for downloading or installing the Apps!</h3>
            </GridItem>
            <GridItem xs={12} sm={12} md={5}>
              <div className={classes.body}>
                <Button color="pink" size='lg'>
                  contact us now&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
                </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>

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