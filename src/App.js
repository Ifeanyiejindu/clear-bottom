import "typeface-work-sans";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./modules/Home/view/HomePage";
import Header from "./modules/Home/components/Header";
import Footer from "./modules/Home/components/Footer";
import About from "./modules/About/view/About";
import Tours from "./modules/Tours and booking/view/Tours";
import Photography from "./modules/Photography/view/Photography";
import Contact from "./modules/Contact/view/Contact";
import FloatingWhatsAppLiveChat from "./constants/generalComponents/FloatingWhatsAppLiveChat";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingWhatsAppLiveChat />
    </Router>
  );
}

export default App;
