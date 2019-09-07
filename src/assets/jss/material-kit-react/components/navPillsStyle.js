import { primaryColor } from "assets/jss/material-kit-react.js";

const navPillsStyle = theme => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "50px",
    overflow: "visible !important",
    lineHeight: "24px",
    fontSize: "18px",
    fontWeight: "500",
    position: "relative",
    display: "block",
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflow: "visible !important"
  },
  contentWrapper: {
    marginTop: "20px",
    padding: "15px",
  },
  primary: {
    borderRadius: 5,
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: primaryColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
    }
  },
  tabContent: {
    padding: '10px'
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  redy: {
    color: 'red'
  }

});

export default navPillsStyle;
