import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Certificate from "./views/pdf";
import {  Notify, Notifier } from "bc-react-notifier";
import NoToken from "./views/NoToken"

const App = () => {
    
    return <Router>
              <Switch>
                  <Route exact path="/pdf/:token" component={Certificate}/>
                  <Route component={NoToken} />
              </Switch>
           </Router>
}

export default App;