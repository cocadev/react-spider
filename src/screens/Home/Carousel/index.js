import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Button from "components/CustomButtons/Button.js";
import Carousel from "react-slick";
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import Box from '@material-ui/core/Box';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false
};
const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function HeaderView() {

  const classes = useStyles();

  const SLIDERS = [
    { img: classes.backgroundImage1, title: 'Custom Man Development', description: 'The Hotel of Home Search' },
    { img: classes.backgroundImage2, title: 'We Work Remotely 24/7', description: 'The Market of Home Search' },
    { img: classes.backgroundImage3, title: 'Optimize Movie Systems', description: 'The Movie of Home Search' }
  ]
  return (
    <Carousel {...settings}>
      {
        SLIDERS.map((item, key) => (
          <Slider key={key} item={item} />
        ))
      }
    </Carousel>
  );
}

function Slider(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  return (
    <div className={classnames(classes.background, props.item.img)}>
      <div className={classes.section}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={7}>
            <h4 className={classes.title}>{props.item.title}</h4>
            <h4 className={classes.content}>{props.item.description}</h4>
            <br /><br />
            <Button className={classes.myBtn}>
              {'GET IN TOUCH'}
              &nbsp;&nbsp;&nbsp;&nbsp;<i className="fas fa-long-arrow-alt-right"></i>
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              alignItems="flex-end"
            >
              <div className={classes.playerBtn}>
                <div className="play-btn" onClick={() => setClassicModal(true)}></div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          
          open={classicModal}
          TransitionComponent={Transition}
          keepMounted
          maxWidth='lg'
          onClose={() => setClassicModal(false)}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
            <Box>
              <iframe 
                title="SpiderMan Video"
                className={classes.video}
                src="https://www.youtube.com/embed/zYpb_4rcWl4" 
                frameBorder="0" 
                allowFullScreen=""
                id="_dytid_3140">
              </iframe>
            </Box >
          </DialogContent>
        </Dialog>
      </div>
    </div >
  )
}