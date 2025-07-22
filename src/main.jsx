import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// ✅ Import Lenis and AOS
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Initialize smooth scroll and AOS
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // nice easing
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
