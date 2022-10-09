import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BaseRoutes from "./routes/BaseRoutes";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Chart from "./Chart";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" id={theme}>
      <Navbar />
      {/* <Chart/> */}
      <ScrollToTop />
      <BaseRoutes />
      <Footer />
    </div>
  );
}

export default App;
