import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./sections/Header";
import Intro from "./sections/Intro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Intro />
    </div>
  );
}

export default App;
