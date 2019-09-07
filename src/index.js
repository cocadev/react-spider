import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import theme from './src/utils/responsive'
import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";

import Home from "./src/view/Home";
import AppTutorials from "./src/view/AppTutorials";
import OurApps from "./src/view/OurApps";
import Price from "./src/view/Price";
import PrivacyPolicy from "./src/view/PrivacyPolicy";
import AppUsagePolicy from "./src/view/AppUsagePolicy";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/guide" component={Components} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/ourApps" component={OurApps} />
        <Route path="/price" component={Price} />
        <Route path="/AppTutorials" component={AppTutorials} />
        <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route path="/AppUsagePolicy" component={AppUsagePolicy} />
        <Route path="/" component={Home} />
      </Switch>
    </ThemeProvider>

  </Router>,
  document.getElementById("root")
);
