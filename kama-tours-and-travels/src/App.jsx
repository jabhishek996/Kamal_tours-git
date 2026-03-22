import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Homepage";
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
import Services from "../src/Pages/Services";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* Catch-all route */}
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;