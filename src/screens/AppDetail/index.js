import React from "react";
import classNames from "classnames";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks.js";
import styles from "../../utils/styles";
import Footer from "../Footer";
import PDFViewer from 'pdf-viewer-reactjs';
import Carousel from "react-slick";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false
};

export default function AppDetail(props) {

  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classNames(classes.container, classes.pt_25)}>

          <div>{'Project Manager Site Safety Assessment \nAllows managers, OHS officers and auditors to do a complete audit on site of a contractor or staff crew.\nApp Screenshots'}</div>

          <PDFViewer
            document={{
              url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf'
            }}
          />

          <Grid
            container
            alignItems='center'
            justify='center'
          >
            <Grid item xs={12} sm={6} md={4}>
              <Carousel {...settings}>
                <img 
                  className={classes.img_2} 
                  src={require("assets/img/tur/setting-1.png")} 
                  alt={'{frontend image}'} 
                />
                <img 
                  className={classes.img_2} 
                  src={require("assets/img/tur/setting-1.png")} 
                  alt={'{frontend image}'} 
                />
              </Carousel>
            </Grid>
          </Grid>

        </div>
      </div>

      <Footer />

    </div>
  );
}
