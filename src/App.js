import "./App.scss";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Csr from "./sections/Csr";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import Jobs from "./sections/Jobs";
import People from "./sections/People";
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
      <People />
      <Csr />
      <Jobs />
    </div>
  );
}

export default App;
