import React, { Component } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import MainApp from "./components/MainApp";
import Admin from "./components/Admin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import PrivateRoute from "./components/common/PrivateRoute";
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./components/Alerts";
import store from "./store";
import { loadUser } from "./actions/authAction";

//Alert Options
const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 3000,
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <React.Fragment>
              <Alerts />
              <Switch>
                <Route exact path="/" component={MainApp} />
                <PrivateRoute exact path="/admin" component={Admin} />
              </Switch>
            </React.Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
