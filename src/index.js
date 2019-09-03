import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import theme from './src/utils/responsive'
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import Home from "src/view/Home";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";



var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/guide" component={Components} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/" component={Home} />
      </Switch>
    </ThemeProvider>

  </Router>,
  document.getElementById("root")
);
