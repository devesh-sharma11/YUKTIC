import React, {
  useRef,
  useState,
} from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Footer from "./components/Footer";

function App() {

  /*
    Real Navbar logo reference.

    It is not used for the animation anymore.

    The Hero uses its OWN fake navbar,
    which guarantees perfect overlap.
  */

  const navbarLogoRef =
    useRef(null);


  /*
    Real Navbar starts hidden.
  */

  const [
    showRealNavbar,
    setShowRealNavbar,
  ] = useState(false);


  return (
    <>

      {/* =================================
          REAL NAVBAR

          Hidden during intro.
          Appears after Hero animation.
      ================================= */}

      <Navbar
        ref={navbarLogoRef}
        visible={showRealNavbar}
      />


      {/* =================================
          HERO

          Contains temporary fake navbar.
      ================================= */}

      <Hero
        onLogoAnimationComplete={() => {

          /*
            Show the REAL navbar immediately
            when the traveling logo reaches the
            fake navbar.
          */

          setShowRealNavbar(true);

        }}
        
      />
      <Footer />

    </>
  );
}


export default App;