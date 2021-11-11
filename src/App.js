import React from "react";
import LetsTalk from "./components/Letstalk/Letstalk";
import Email from "./components/Letstalk/Email";
import TechSupport from "./components/Letstalk/TechSupport";
import { BrowserRouter as  Switch, Route } from "react-router-dom";



function App(){
    return(
        <div>
            <Switch>
                <Route exact path="/" component={LetsTalk} />
                <Route exact path="/get-technical-support" component={TechSupport} />
                <Route exact path="/email-sales" component={Email} />
            </Switch>
        </div>
    );
}

export default App;
