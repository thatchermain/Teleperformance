import "./App.scss";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import Values from "./sections/Values";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Intro />
      <About />
      <Benefits />
      <Values />
    </div>
  );
}

export default App;
