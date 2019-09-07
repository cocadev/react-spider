import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import styles from "../styles";
import texts from "../../utils/fontStyle"
import * as X from '../../utils/static'

const useStyles = makeStyles(styles);
const useTexts = makeStyles(texts);

export default function Section2() {

  return (
    <div >
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={9} >
          <NavPills
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: "Yearly Plan save 20%",
                tabContent: (
                  <Grid container justify="center" >
                    {X.PRICING1.map((item, key) =>
                      <Grid item xs={12} sm={12} md={4}>
                        <Board item={item} />
                      </Grid>)}
                  </Grid>
                )
              }, {
                tabButton: "Monthly Plan",
                tabContent: (
                  <Grid container justify="center" >
                    {X.PRICING2.map((item, key) =>
                      <Grid item xs={12} sm={12} md={4}>
                        <Board item={item} />
                      </Grid>)}
                  </Grid>
                )
              },
            ]}
          />
        </Grid>
      </Grid>

    </div>
  );
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

