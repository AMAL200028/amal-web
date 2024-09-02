import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Todo from './components/Todo';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:code" element={<CountryDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
