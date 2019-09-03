import { container } from "assets/jss/material-kit-react.js";
import image1 from "assets/img/widescreen-7.jpg"
import image2 from "assets/img/widescreen-4.jpg"
import image3 from "assets/img/widescreen-8.jpg"

export default {
  section: {
    padding: "70px",
    textAlign: "left",
    ...container,
    display: 'flex',
    '@media (max-width:426px)': {
      padding: "0 50px",
    },
  },
  background: {
    height: 645,
    marginTop: 87,
    backgroundPosition: "center",
    backgroundSize: "cover",
    '@media (max-width:426px)': {
      height: 280,
      marginTop: 71,
    },
  },
  content: {
    fontSize: 55,
    color: '#fff',
    fontWeight: 500,
    lineHeight: 1.5,
    '@media (max-width:426px)': {
      fontSize: 20,
    },
  },
  title: {
    marginTop: 80,
    color: "#fff !important",
    fontSize: 30,
    fontWeight: 300,
    '@media (max-width:426px)': {
      marginTop: 30,
      fontSize: 16,
    },
  },
  myBtn: {
    marginTop: 0,
    '@media (max-width:426px)': {
      marginTop: -40,
    },
  },
  playerBtn: {
    '@media (max-width:426px)': {
      position: 'absolute',
      right: 50,
      top: -30
    },
  },
  video: {
    width: 800,
    height:460,
    padding: "40px 60px",
    '@media (max-width:426px)': {
      width: 200,
      height:100,
      padding: "4px 6px",
    },
  },
  backgroundImage1: {
    backgroundImage: "url(" + image1 + ")",
  },
  backgroundImage2: {
    backgroundImage: "url(" + image2 + ")",
  },
  backgroundImage3: {
    backgroundImage: "url(" + image3 + ")",
  },
  player: {
    backgroundColor: 'red',
    flex: 1,
    alignSelf: 'right'
  }
};
