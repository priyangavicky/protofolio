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
// Import NotFound for 404 handling if you create it
// import NotFound from './components/NotFound'; 

const Home = () => (
  <>
    <Header />
    <Hero />
    <About />
    <Websites />
    <Projects />
    <Contact />
    <Footer />
  </>
);

function App() {
  /* const basename = process.env.NODE_ENV === 'production' ? '/subdirectory' : '/'; */

  return (
    <div className="App">
      <Router basename='/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bulkmailoverview" element={<Mailoverview />} />
          <Route path="/todooverview" element={<Todo />} />
          {/* 404 Route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App
