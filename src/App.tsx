import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Vision from "./components/Vision";
import Values from "./components/Values";
import Services from "./components/Services";
import Why from "./components/Why";
import Client from "./components/Client";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-out" });
  }, []);

  // useEffect(() => {
  //   const trackVisitor = async () => {
  //     try {
  //       const visitorData = {
  //         ip: await fetch("https://api.ipify.org?format=json")
  //           .then((res) => res.json())
  //           .then((data) => data.ip),
  //         userAgent: navigator.userAgent,
  //         pageVisited: window.location.pathname,
  //       };

  //       await axios.post(
  //         "https://indonesiahalalpartner.com/save_visitor.php",
  //         visitorData,
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //     } catch (err) {
  //       console.error("Error tracking visitor:", err);
  //     }
  //   };

  //   trackVisitor();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div id="hero">
                <Hero />
              </div>
              <div id="about">
                <AboutUs />
              </div>
              <div id="visi">
                <Vision />
              </div>
              <div id="values">
                <Values />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="why">
                <Why />
              </div>
              <div id="client">
                <Client />
              </div>
              <div id="footer">
                <Footer />
              </div>
              <WhatsAppButton />
            </>
          }
        />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
