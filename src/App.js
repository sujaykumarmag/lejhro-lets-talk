import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const home = lazy(() => import("./components/Letstalk/Letstalk"));
const techSupport = lazy(() => import("./components/Letstalk/TechSupport"));
const sales = lazy(() => import("./components/Letstalk/Email"));
function App() {
  return (
    <div>
      <HashRouter>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={home} />
            <Route
              exact
              path="/get-technical-support"
              component={techSupport}
            />
            <Route exact path="/email-sales" component={sales} />
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
