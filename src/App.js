import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Certificate from "./certificates/views/pdf";
import {  Notify, Notifier } from "bc-react-notifier";

const App = () => {
    Notify.error("Page not found")
    return <Router>
              <Switch>
                  <Route exact path="/pdf/:token" component={Certificate}/>
                  <Route render={() => <Notifier />} />
              </Switch>
           </Router>
}

export default App;