import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "./styles";

const useStyles = makeStyles(styles);

export default function Section1() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <center>
              <h5 className={classes.header}>CONTACT US</h5>
              <h1 className={classes.content}>We're Here to Help You</h1>
              <h3 className={classes.description}>Got a project in mind? We'd love to hear about it. Drop us a message so that we can get to know you and understand your project.</h3>
            </center>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <GridContainer >
                <GridItem xs={12} sm={6} md={7}>
                  <form className={classes.form}>
                    <p className={classes.divider}>Drop a Message</p>
                    <CardBody>

                      <GridContainer justify="center">
                        <GridItem xs={12} sm={6} md={4}>
                          <CustomInput
                            labelText="Your Name"
                            id="name"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={4}>
                          <CustomInput
                            labelText="Your Email"
                            id="email"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={4}>
                          <CustomInput
                            labelText="Subject"
                            id="subject"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Message"
                            textarea={true}
                            id="message"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                    {/* <CardFooter className={classes.cardFooter}>
                      <Button color="primary">
                        Send Message &nbsp;&nbsp;<i className="fas fa-paper-plane"></i>
                      </Button>
                    </CardFooter> */}
                  </form>
                </GridItem>
                <GridItem xs={12} sm={6} md={5}>
                  <div className={classes.info}>
                    <h4 className={classes.title}>Contact Info</h4>
                    <p className={classes.note}><i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp; info@desertsoftware.com.au</p>
                    <p className={classes.note}><i className="fa fa-phone-square"></i>&nbsp;&nbsp;&nbsp;+61 3 9759 6266</p>
                    <p className={classes.note}><i className="fas fa-fax"></i>&nbsp;&nbsp;&nbsp;+61 3 9753 2995</p>
                    <div className={classes.iconView}>
                      <div>
                        <a href="https://twitter.com/desert_software">
                          <span className={classes.icon}><i className="fab fa-twitter-square"></i></span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.linkedin.com/company/desert-software-management-systems">
                          <span className={classes.icon}><i className="fab fa-linkedin"></i></span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.facebook.com/Desert-Software-180734486011135">
                          <span className={classes.icon}><i className="fab fa-facebook-square"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>

                </GridItem>

              </GridContainer>

            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

