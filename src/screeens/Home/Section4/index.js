import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const useStyles = makeStyles(styles);
const DATA = [
  'ultimate-group-logo.png',
  'oz-linemarking-logo.png',
  'burdetts-logo.png',
  'asphaltech-logo.png',
  'road-master-logo.png',
  'lincroads-logo.png',
  'road-maintenance-logo.png'
]

export default function Section2() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.section}>
        <center>
          {
            DATA.map((item, key) => (
              <img key={key} className={classes.img} src={require("assets/img/" + item)} alt={'{frontend image}'} />
            ))
          }
        </center>
      </div>
    </div>
  );
}