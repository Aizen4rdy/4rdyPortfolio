import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Header,
  About,
  Certificates,
  Projects,
  Contact,
  Bottom,
} from "./components";

import { motion } from "framer-motion";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <motion.main
          className="flex-grow scroll-smooth"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section id="home">
            <Hero />
          </section>

          <Header />

          <section id="about" className="scroll-mt-24">
            <About />
          </section>

          <section id="certificates" className="scroll-mt-24">
            <Certificates />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>

          {/* ✅ Spacer ensures Bottom is always visible */}
          <div className="h-20" />
        </motion.main>

        {/* ✅ Footer pinned to bottom of page content */}
        <Bottom />
      </div>
    </BrowserRouter>
  );
};

export default App;
