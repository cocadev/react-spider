import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <i class="fab fa-twitter"></i>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <i class="fab fa-linkedin"></i>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <i class="fab fa-facebook-f"></i>
            </ListItem>
          </List>
        </div>
        <div className={classes.text}>
          Copyright&copy; {1900 + new Date().getYear()} Desert Software. All forms and Apps are copyright {1900 + new Date().getYear()}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
