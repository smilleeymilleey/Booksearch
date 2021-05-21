import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Save from "./pages/Save";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
        <Nav />
      <Switch>
          <Route exact path="/">
             <Books />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/save">
            <Save />
          </Route>
       </Switch>  
    </div>
      </Router>
  );
}

export default App;
