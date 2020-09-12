import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Certificate from "./views/pdf";
import NoToken from "./views/NoToken"
import Preview from "./views/Preview";

const App = () => {
    
    return <Router>
        <Switch>
            <Route exact path="/pdf/:token" component={Certificate}/>
            <Route exact path="/preview/:token" component={Preview}/>
            <Route component={NoToken} />
        </Switch>
    </Router>
}

export default App;