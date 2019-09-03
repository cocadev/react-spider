import image from "assets/img/widescreen-5.jpg";
import { container } from "assets/jss/material-kit-react.js";

export default {
  img: {
    width: "100%"
  },
  container: {
    ...container
  },
  section: {
    padding: "70px 0",
    textAlign: "left",
    backgroundImage: "url(" + image + ")"
  },
  background: {
    backgroundColor: '#F8F8F8'
  },
  body: {
    paddingLeft: "3rem !important",
    '@media (max-width:426px)': {
      paddingLeft: "0.3rem !important",
    },
  },
  title: {
    color: "#fff !important",
    fontWeight: 500
  },
  content: {
    fontSize: "2.8125rem",
    color: '#fff',
    fontWeight: 500,
    lineHeight: 1.2
  },
  description: {
    color: "#6c6c6c !important",
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 1.9,
    '@media (max-width:426px)': {
      fontSize: 13,
      lineHeight: 1.5,
    },
  },
  quote: {
    color: "#fff !important",
    fontSize: 26,
    fontWeight: '300',
    margin: '20px 0 50px 0',
  },
  item: {
    color: "#434343 !important",
    fontSize: 20,
    fontWeight: 500
  },
  itemContent: {
    fontSize: 16,
    paddingLeft: "1.8rem",
    color: '#434343'
  },
  pink: {
    color: "#9c27B0 !important",
    marginRight: 10
  },
  cardTitle: {
    marginTop: 36,
    fontWeight: '500',
    fontSize: 20
  },
  hr: {
    height: 1,
    width: '100%',
    backgroundColor: '#DEE2E6',
    margin: '20px 0 22px 0'
  },
  card: { 
    maxWidth: 300,
    display: "inline-block",
    margin:"40px 20px 100px 20px",
    '@media (max-width:426px)': {
      maxWidth: 260,
      margin:"40px 5px 70px 5px",
    },
  },
  box: {
    position: "absolute",
    zIndex: 1,
    content: "\f10d",
    fontSize: "37px",
    fontWeight: 600,
    fontFamily: "Font Awesome 5 Free",
    color: "#ffffff",
    right: "38px",
    top: "-35px",
    height: "72px",
    width: "72px",
    lineHeight: "72px",
    paddingLeft: "17px",
    borderRadius: "50%",
    background: "-webkit-linear-gradient(left,#c54db7 0,#ffab2f 44%,#ffa700 100%)",
    backgroundSize: "300%,1px",
    backgroundPosition: "0%",
  },

};
