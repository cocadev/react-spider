import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "./styles"

const useStyles = makeStyles(styles);

export default function Footer2() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <div className={classes.section}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <p className={classes.title}>DESERT SOFTWARE</p>
                        <p className={classes.content}>Desert Software is a boutique digital transformation consultancy & software development company that provides IT solutions.</p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <p className={classes.title}>FIND US</p>
                        <p className={classes.tax}><i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;info@desertsoftware.com.au</p>
                        <p className={classes.tax}><i className="fa fa-phone-square"></i>&nbsp;&nbsp;&nbsp;+61 3 9759 6266</p>
                        <p className={classes.tax}><i className="fas fa-fax"></i>&nbsp;&nbsp;&nbsp;+61 3 9753 2995</p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <p className={classes.title}>ABOUT THIS SITE</p>
                        <p className={classes.content}>Information contained in this site is NOT to be re-produced without written permission from DESERTSOFTWARE.COM.AU</p>

                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}