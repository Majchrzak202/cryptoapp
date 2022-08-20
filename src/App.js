import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./screens/HomePage";
import CryptoPage from "./screens/CryptoPage";
import "./App.css";
import { Routes, Route } from "react-router";
import Login from "./screens/Login";
import Portfolio from "./screens/Portfolio";
import CoinPage from "./components/coins/coin-page/CoinPage";
import About from "./screens/About";
import Contact from "./screens/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cryptos" element={<CryptoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/coinpage/:id" element={<CoinPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
