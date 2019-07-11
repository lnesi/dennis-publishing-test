import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../pages/Landing";
import PokemonDetailPage from "../pages/PokemonDetail";
import Header from "../components/Header";

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Header />
        <div className="row">
          <div className="col">
            <Route exact path="/" component={LandingPage} />
            <Route path="/detail/:id" component={PokemonDetailPage} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
