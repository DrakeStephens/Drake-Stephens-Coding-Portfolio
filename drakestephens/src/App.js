import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Nav from "./components/Nav"
import Footer from "./components/Footer"

//Pages
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"

function App() {
  return (
    <Router>
      <header>
        <div>
          <Nav />
        </div>
      </header>
      <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Resume" component={Resume} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
