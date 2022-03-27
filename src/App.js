import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import ContactUs from './components/pages/ContactUs';
import Home from './components/pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact-us' component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
