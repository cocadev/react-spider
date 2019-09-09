/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import styles from "./headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  return (
    <List className={classes.list}>

      <Link to='/'>
        <MenuComponent icon={<i className="fas fa-home"></i>} title={'Home'} />
      </Link>
      <Link to='/apps'>
        <MenuComponent icon={<i className="fas fa-th"></i>} title={'OHS Apps'} />
      </Link>
      <Link to='/tutorial'>
        <MenuComponent icon={<i className="fas fa-lightbulb"></i>} title={'App Tutorials'} />
      </Link>
      <Link to='/price'>
        <MenuComponent icon={<i className="fas fa-dollar-sign"></i>} title={'Pricing'} />
      </Link>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Policies"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/privacy" className={classes.dropdownLink}>
              <i className="fas fa-user-lock"></i> Privacy Policy
            </Link>,
            <Link to="/usage" className={classes.dropdownLink}>
              <i className="fas fa-list-alt"></i> App Term of Use
            </Link>
          ]}
        />
      </ListItem>

      <Link to="/about" >
        <MenuComponent icon={<i className="fas fa-users size16 mr-2"></i>} title={'About Us'} />
      </Link>
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