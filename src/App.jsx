import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/Index";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./Navbar";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <Navbar />
      <Hello />
      <Routes>
        <Route path="/hi" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
