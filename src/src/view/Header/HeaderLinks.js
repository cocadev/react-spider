/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  return (
    <List className={classes.list}>

      <MenuComponent icon={<i className="fas fa-home size18"></i>} title={'Home'} />
      <MenuComponent icon={<i className="fas fa-th size18"></i>} title={'OHS Apps'} />
      <MenuComponent icon={<i className="fas fa-lightbulb size18"></i>} title={'App Tutorials'} />
      <MenuComponent icon={<i className="fas fa-dollar-sign size18"></i>} title={'Pricing'} />

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Policies"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/PrivacyPolicy" className={classes.dropdownLink}>
              <i className="fas fa-user-lock"></i> Privacy Policy
            </Link>,
            <Link to="/AppUsagePolicy" className={classes.dropdownLink}>
              <i className="fas fa-list-alt"></i> App Term of Use
            </Link>
          ]}
        />
      </ListItem>

      <MenuComponent icon={<i className="fas fa-users size16 mr-2"></i>} title={'About Us'} />
    </List>
  );
}


function MenuComponent(props) {
  const classes = useStyles();
  return <ListItem className={classes.listItem}>
    <Button
      color="transparent"
      target="_blank"
      className={classes.navLink}
    >
      {props.icon} {props.title}
    </Button>
  </ListItem>
}