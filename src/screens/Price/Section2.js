import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import texts from "../../utils/fontStyle"
import styles from './styles'
import * as X from '../../utils/static'
import { makeStyles } from "@material-ui/core/styles";

const useTexts = makeStyles(texts);
const useStyles = makeStyles(styles);

export default function Section2() {

  const [count, setCount] = useState(1);
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={9} >

          <div className={classes.alignCenter}>
            <div className={ count === 1 ? classes.primary: classes.default} onClick={() => setCount(1)}>
              <div className={classes.end}>
                Yearly Plan <span className={classes.small}> &nbsp;&nbsp;SAVE 20%</span>
              </div>
            </div>
            <div className={ count === 2 ? classes.primary: classes.default} onClick={() => setCount(2)}>
              Monthly Plan
            </div>
          </div>

          { count === 1 && <TabPanel data={X.PRICING1} /> }
          { count === 2 && <TabPanel data={X.PRICING2} /> }

        </Grid>
      </Grid>

    </div>
  );
}

function TabPanel(props) {

  const { data } = props;

  return (
    <Grid container justify="center" >
      {data.map((item, key) =>
        <Grid item xs={12} sm={12} md={4} key={key}>
          <Board item={item} />
        </Grid>)}
    </Grid>
  )
}

function Board(props) {

  const texts = useTexts();
  const { color, btn, title, price, description } = props.item;

  return (
    <Card>
      <CardHeader color={color}>{title}</CardHeader>
      <CardBody>
        <h4 className={texts.h004}>
          {
            price ? <div>${price} <span className={texts.h005}>Per month</span> </div> : 'Custom'
          }
        </h4>
        {description.map((item, key) =>
          <div key={key}>
            <p className={texts.h006}>{item}</p>
            <hr />
          </div>
        )}
        <Button color={color} size='lg'>
          {btn}&nbsp;&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
        </Button>
      </CardBody>
    </Card>
  )
}

