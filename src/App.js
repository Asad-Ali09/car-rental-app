import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/app.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Cars from "./components/Cars";
import "./styles/mediaqueries.scss";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
