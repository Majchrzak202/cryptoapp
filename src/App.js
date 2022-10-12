import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BaseRoutes from "./routes/BaseRoutes";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import { Suspense } from "react";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" id={theme}>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner/>}>
        <BaseRoutes />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
