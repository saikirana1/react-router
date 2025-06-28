import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components";
import Home  from "./components/home";
import About from "./components/about";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/hi" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
