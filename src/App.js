import "./App.scss";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Header from "./sections/Header";
import Intro from "./sections/Intro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Intro />
      <About />
    </div>
  );
}

export default App;
