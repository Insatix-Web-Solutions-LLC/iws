import "./App.scss";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Header from "./components/Header";

//Views
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Services from "./views/Services";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
