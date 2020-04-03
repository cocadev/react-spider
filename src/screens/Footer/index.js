import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "./styles"
import Button from "components/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Slide from "@material-ui/core/Slide";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function Footer() {

    const classes = useStyles();
    const [classicModal, setClassicModal] = React.useState(false);

    return (
        <div className={classes.background}>
            <div className={classes.section}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4}>
                        <p className={classes.title}>Spider Man</p>
                        <p className={classes.content}>Spider Man is a boutique digital transformation consultancy & Man development company that provides IT solutions.</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <p className={classes.title}>FIND US</p>
                        <p className={classes.tax}><i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;info@kingofdevs.com.ph</p>
                        <p className={classes.tax}><i className="fa fa-phone-square"></i>&nbsp;&nbsp;&nbsp;+21 3 9759 6266</p>
                        <p className={classes.tax}><i className="fas fa-fax"></i>&nbsp;&nbsp;&nbsp;+61 3 9753 2995</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <p className={classes.title}>ABOUT THIS SITE</p>
                        <p className={classes.content}>Information contained in this site is NOT to be re-produced without written permission from kingofdevs.com.ph</p>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.footer2}>
                <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                        <i className="fab fa-twitter"></i>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                        <i className="fab fa-linkedin"></i>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                        <i className="fab fa-facebook-f"></i>
                    </ListItem>
                </List>
                <div className={classes.text}>
                    Copyright&copy; {1900 + new Date().getYear()} Spider Man. All forms and Apps are copyright {1900 + new Date().getYear()}
                </div>
            </div>
            <Button
                className={classes.modalBtn}
                color="primary"
                justIcon
                round
                onClick={() => setClassicModal(true)}
            >
                <i className="fa fa-envelope"></i>
            </Button>
            <Dialog
                classes={{
                    root: classes.center,
                    paper: classes.modal
                }}
                open={classicModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setClassicModal(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
            >
                <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                >
                    <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => setClassicModal(false)}
                    >
                        <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Get a free trial or ask more about our services?</h4>
                </DialogTitle>
                <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                >
                    <form className={classes.form}>
                        <p className={classes.divider}>Leave us a message and we will contact you quickly.</p>
                        <CardBody>

                            <Grid container justify="center" spacing={3}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CustomInput
                                        labelText="Your Name"
                                        id="name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CustomInput
                                        labelText="Your Email"
                                        id="email"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <CustomInput
                                        labelText="Subject"
                                        id="subject"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Message"
                                        textarea={true}
                                        id="message"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                            <Button color="pink" size='lg'>
                                Send Message
                            </Button>
                        </CardFooter>
                    </form>
                </DialogContent>
            </Dialog>

        </div>
    );
}