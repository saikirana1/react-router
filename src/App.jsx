import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/Index";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./Navbar";
import Hello from "./components/Hello";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import ProblemSet from "./components/ProblemSet";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/hi" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/problemset/:subjectname" element={<ProblemSet />} />
      </Routes>
    </>
  );
}

export default App;
