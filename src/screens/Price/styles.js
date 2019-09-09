import { primaryColor } from "assets/jss/material-kit-react.js";

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "500",
    lineHeight: "1.5em",
    fontSize: '1.1rem'
};

const navPillsStyle = theme => ({
  container: {
    marginTop: "130px"
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  small: {
    fontSize: '0.75rem'
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflow: "visible !important"
  },
  end: {
    alignItems: 'flex-end'
  },
  primary: {
    width: "200px",
    height: "50px",
    margin: "20px",
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    borderRadius: 5,
    ...defaultFont,
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: primaryColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
    }
  },
  default: {
    width: "200px",
    height: "50px",
    margin: "12px",
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    borderRadius: 5,
    ...defaultFont,
    "&,&:hover": {
      color: '#555',
    }
  },
  tabContent: {
    padding: '10px'
  },
  alignCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "50px"
  },
  margin: {
    margin: "32px 0 12px"
  },
  top: {
      marginTop: "25px"
  },
  myCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  hr: {
    height: "1px",
    backgroundColor: 'red'
  }
});

export default navPillsStyle;
