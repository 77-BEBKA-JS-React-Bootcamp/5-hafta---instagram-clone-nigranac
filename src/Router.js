import React from "react";
import "./index.css";
import "./styles.scss";
import { Provider } from "react-redux";
import store from "./store/store";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import FeedPicture from "./components/FeedPicture/FeedPicture";
function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FeedPicture} />
          <Route exact path="/dashboard/:id" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
