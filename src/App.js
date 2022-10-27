import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BaseRoutes from "./routes/BaseRoutes";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./context/ThemeContext";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import { Suspense } from "react";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";
import { ToastContainer } from "react-toastify";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App" id={theme}>
      <Navbar />
      <ScrollToTop />
      <ToastContainer />
      <Suspense fallback={<LoadingSpinner />}>
        <BaseRoutes />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
