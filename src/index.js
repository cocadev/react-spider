import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import theme from './utils/responsive'
import "assets/scss/material-kit-react.scss?v=1.8.0";

import Home from "./screens/Home";
import AppTutorials from "./screens/AppTutorials";
import OurApps from "./screens/OurApps";
import Price from "./screens/Price";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import AppUsagePolicy from "./screens/AppUsagePolicy";
import About from "./screens/About";
import NoMatch from "./screens/NoMatch"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/apps" component={OurApps} />
        <Route path="/price" component={Price} />
        <Route path="/tutorial" component={AppTutorials} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/usage" component={AppUsagePolicy} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />

      </Switch>
    </ThemeProvider>

  </Router>,
  document.getElementById("root")
);
