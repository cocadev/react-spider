import { container, primaryColor } from "assets/jss/material-kit-react.js";

export default {
  section: {
    padding: "30px 0",
    textAlign: "left",
    ...container
  },
  background: {
    backgroundColor: '#323232'
  },
  title: {
    color: "#fff",
    fontSize:19,
    fontWeight: 600,
    lineHeight:1.875
  },
  content: {
    color: "#929292",
    fontSize:14,
    lineHeight:1.5
  },
  tax: {
    color: "#929292",
    fontSize:14,
    lineHeight:1
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    fontSize: "20px",
    margin: "15px 18px 0 18px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  footer2: {
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    color: '#939393',
    padding: "12px"
  },
  text: {
    margin: "14px 0 2px"
  },
  /////// Footer ///////
  modalBtn: {
    zIndex: 100,
    position: 'fixed',
    right: 10,
    bottom: 10
},
modalCloseButton: {
    color: "#999999",
    marginTop: "12px",
    WebkitAppearance: "none",
    padding: "0",
    cursor: "pointer",
    background: "0 0",
    border: "0",
    fontSize: "inherit",
    opacity: ".9",
    textShadow: "none",
    fontWeight: "700",
    lineHeight: "1",
    float: "right"
},
modalTitle: {
    marginTop: 30,
    fontWeight: 500
}
};
