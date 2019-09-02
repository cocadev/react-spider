import { container } from "assets/jss/material-kit-react.js";

import image from "assets/img/05-full.jpg";

export default {
  section: {
    minHeight: "110vh",
    maxHeight: "1600px",
    padding: "70px 0",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  
  },
  info:{
    minHeight: "540px",
    maxHeight: "1600px",
    padding: "70px",
    margin: "0",
    border: "0",
    alignItems: "center",
    backgroundImage: "url(" + image + ")",
    backgroundPosition: "top center",
    backgroundSize: "cover",
  },
  container,
  form: {
    margin: "20px"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "70px",
    marginLeft: "30px",
    fontSize: 25,
    fontWeight: 500
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  },
  title: {
    color: "#fff !important",
    fontWeight: 500,
    fontSize: 24,
    marginBottom: 50,
    marginLeft: -10
  },
  header: {
    color: "#9c27b0 !important",
    fontWeight: 500,
    fontSize: 17,
  },
  content: {
    fontSize: "2.8125rem",
    color: '#343434',
    fontWeight: 500,
    lineHeight: 1.2
  },
  description: {
    color: "#6c757d !important"
  },
  iconView: {
    display: 'flex',
    marginTop: 60,
  },
  icon: {
    color: '#fff',
    fontSize: 36,
    marginRight: 20
  },
  note: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 500,
    lineHeight:2.3
  }
};