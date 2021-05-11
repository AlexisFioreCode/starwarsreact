import './App.css';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Nav from './components/layout/nav/Nav';
import Accueil from './components/accueil/Accueil';
import Recherche from './components/recherche/Recherche';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Nav />
        <main className="container my-5">
          <Switch>
            <Route path="/accueil">
              <Accueil />
            </Route>
            <Route path="/recherche">
              <Recherche/>
            </Route>
            <Route path="/">
              <Accueil />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
