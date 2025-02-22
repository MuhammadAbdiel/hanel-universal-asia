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
import axios from "axios";
import { Dashboard } from "./pages/Dashboard";
import { Helmet } from "react-helmet";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-out" });
  }, []);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const visitorData = {
          ip: await fetch("https://api.ipify.org?format=json")
            .then((res) => res.json())
            .then((data) => data.ip),
          userAgent: navigator.userAgent,
          pageVisited: window.location.pathname,
        };

        await axios.post(
          "https://haneluniversalasia.com/save_visitor.php",
          visitorData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (err) {
        console.error("Error tracking visitor:", err);
      }
    };

    trackVisitor();
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>Hanel Universal Asia</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Jasa IT Pembuatan Website dan Aplikasi"
        />
        <meta
          name="keywords"
          content="HANEL UNIVERSAL ASIA, Hanel Universal Asia, Hanel, Universal, Asia, IT, Website, Aplikasi, Pembuatan Website, Pembuatan Aplikasi, Jasa IT"
        />
        <meta name="author" content="HANEL UNIVERSAL ASIA" />
        <link rel="canonical" href="https://haneluniversalasia.com/" />
      </Helmet>

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
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
