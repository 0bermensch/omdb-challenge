import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Searchpage } from "./components/Searchpage";
import { Nominated } from "./components/Nominated";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./store/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Searchpage />
          </Route>
          <Route path="/nominated">
            <Nominated></Nominated>
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
