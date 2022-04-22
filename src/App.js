import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Products } from "./screens";

import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="content-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
