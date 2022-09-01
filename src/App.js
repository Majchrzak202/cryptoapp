import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import BaseRoutes from "./routes/BaseRoutes";

function App() {
  return (
    <div className="app">
      <Navbar />
      <BaseRoutes />
      <Footer />
    </div>
  );
}

export default App;
