import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/index.scss";
import AppHeader from "./AppHeader";
import Loader from "./Loader";

const Details = lazy(() => import("./Details"));
const Main = lazy(() => import("./Main"));

export const App = (): JSX.Element => (
  <Suspense fallback={<Loader />}>
    <Router>
      <div className="app">
        <AppHeader />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:id" component={Details} exact />
        </Switch>
      </div>
    </Router>
  </Suspense>
);

export default App;
