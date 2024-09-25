import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Websites from './components/Websites';
import Projects from './components/Projects';
import Mailoverview from './components/bulkmailoverview';
import Todo from './components/todooverview';




function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/portfolio' : '/';

  return (
    <div className="App">
      <Router basename={basename}>
      <Routes>
      <Route path="/" element={<React.Fragment>
        <Header/>
        <Hero />
        <About/>
        <Websites/>
        <Projects/>
        <Contact/>
        <Footer/>
       </React.Fragment>} />
       <Route path="/bulkmailoverview" element={<Mailoverview />} />
       <Route path="/todooverview" element={<Todo />} />
       </Routes>
</Router>
    </div>
  );
}

export default App;