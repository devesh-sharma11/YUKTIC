import React, {
  useRef,
  useState,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";
import JobPage from "./pages/JobsPage";
import AiBot from "./components/AiBot";
function AppContent() {

  const navbarLogoRef = useRef(null);

  const [
    showRealNavbar,
    setShowRealNavbar,
  ] = useState(false);

  const location = useLocation();

  /*
    Navbar should be visible on About page immediately.
    On Home page it appears after Hero animation.
  */
  const navbarVisible =
    showRealNavbar ||
    location.pathname === "/about" ||
    location.pathname === "/services" ||
    location.pathname === "/jobs" ||
    location.pathname === "/contact" ||
    location.pathname === "/article";


  return (
    <>
      {/* =================================
          REAL NAVBAR
      ================================= */}
      <Navbar
        ref={navbarLogoRef}
        visible={navbarVisible}
      />

      {/* =================================
          ROUTES
      ================================= */}
      <Routes>

        {/* ===============================
            HOME PAGE
        =============================== */}
        <Route
          path="/"
          element={
            <>
              <Hero
                onLogoAnimationComplete={() => {
                  setShowRealNavbar(true);
                }}
              />

              <Footer />
            </>
          }
        />

        {/* ===============================
            ABOUT PAGE
        =============================== */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* ===============================
            SERVICE PAGE
        =============================== */}
        <Route
          path="/services"
          element={<ServicesPage />}
        />

        {/* ===============================
            ARTICLE PAGE
        =============================== */}
        <Route
          path="/article"
          element={<ArticlePage />}
        />

        {/* ===============================
            CONTACT PAGE
        =============================== */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />

        {/* ===============================
            JOB PAGE
        =============================== */}
        <Route
          path="/jobs"
          element={<JobPage />}
        />

      </Routes>


      {/* =====================================
          GLOBAL AI ASSISTANT
      ====================================== */}

      <AiBot />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}


export default App;