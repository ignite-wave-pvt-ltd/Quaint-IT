import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Industries from "./components/Industries";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CorporateCompliance from "./components/CorporateComplaince";
import BusinessAdvisory from "./components/BusinessAdvisory";
import HRPayroll from "./components/HRAndPayroll";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <main className="pt-20">
                <About />
              </main>
            }
          />
          <Route
            path="/services"
            element={
              <main className="pt-20">
                <Services />
              </main>
            }
          />
          <Route
            path="/services/corporate-compliance"
            element={
              <main className="pt-20">
                <CorporateCompliance />
              </main>
            }
          />
          <Route
            path="/services/business-advisory"
            element={
              <main className="pt-20">
                <BusinessAdvisory />
              </main>
            }
          />
          <Route
            path="/services/hr-payroll"
            element={
              <main className="pt-20">
                <HRPayroll />
              </main>
            }
          />
          <Route
            path="/why-choose-us"
            element={
              <main className="pt-20">
                <WhyChooseUs />
              </main>
            }
          />
          <Route
            path="/industries"
            element={
              <main className="pt-20">
                <Industries />
              </main>
            }
          />
          <Route
            path="/clients"
            element={
              <main className="pt-20">
                <Clients />
              </main>
            }
          />
          <Route
            path="/contact"
            element={
              <main className="pt-20">
                <Contact />
              </main>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
