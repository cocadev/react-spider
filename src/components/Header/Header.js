import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/icons/Menu";
import styles from "assets/jss/material-kit-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    document.body
      .getElementsByTagName("header")[0]
      .classList.remove(classes[color]);
    document.body
      .getElementsByTagName("header")[0]
      .classList.add(classes['white']);
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { color, rightLinks, leftLinks, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: false,
    [classes[color]]: 'white',
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent = <Button className={classes.title}>
    <img src={require('../../assets/img/logo.png')} alt={'{logo}'}/>
  </Button>;
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
              brandComponent
            )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}
