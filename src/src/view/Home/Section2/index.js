import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "./styles";
import classnames from 'classnames'

const useStyles = makeStyles(styles);

export default function Section2() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <img className={classes.img} src={require("assets/img/front-img.png")} alt={'{frontend image}'} />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.body}>
              <h5 className={classes.title}>WHAT WE DO</h5>
              <h1 className={classes.content}>Product Development for Better Business</h1>
              <h3 className={classes.description}>Desert Software is for all types of business, creating innovative products that empower our customers to grow.</h3>

              <Item title={'OHS Management Systems'} content={'We develop Apps with dashboards to help customers complete OHS audit.'}/>
              <Item title={'IT Services & Consultancy'} content={'We use the latest technologies to design the products the customers need.'}/>
              <Item title={'NDIS Audit Systems'} content={'We provide modern software development practices for NDIS providers without outdated paper systems.'}/>

            </div>
          </GridItem>

        </GridContainer>
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