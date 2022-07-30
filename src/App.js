import "./App.scss";

//Views
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Services from "./views/Services";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
