import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Social from './components/Social';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/social" component={Social} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;


