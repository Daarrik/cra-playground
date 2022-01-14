import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './screens/About';
import Home from './screens/Home';
import Products from './screens/Products';

import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
