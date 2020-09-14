import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Certificate from "./views/Pdf";
import {  Notify, Notifier } from "bc-react-notifier";
import NoToken from "./views/NoToken";
import Share from "./views/Share"

const App = () => {
    
    return <Router>
              <Switch>
                  <Route exact path="/pdf/:token" component={Certificate}/>
                  <Route exact path="/share/:token" component={Share} />
                  <Route component={NoToken} />
              </Switch>
           </Router>
}

export default App;