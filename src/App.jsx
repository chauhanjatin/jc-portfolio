import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Colortheme from "./components/Colortheme";
import Loader from "./components/Loader";
import Hero from "./pages/Hero";
import Aboutus from "./pages/Aboutus";
import Mywork from "./pages/Mywork";
import Hireme from "./pages/Hireme";
import Contactus from "./pages/Contactus";
import ScrollToTop from "./components/ScrollToTop";
import ProjectPage from "./pages/ProjectPage";
import Header from "./components/Header";
import CustomCursor from "./components/CustomCursor";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 991);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}

function App() {

  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (loading) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader />}
      <ScrollToTop />
      {isDesktop && <CustomCursor />}
      <Navbar />
      <Header />
      {/* <Colortheme /> */}
      <Routes>
        < Route path="/" element={<Hero />} />        
        < Route path="/about" element={<Aboutus />} />      
        < Route path="/mywork" element={<Mywork />} />
        < Route path="/hireme" element={<Hireme />} />
        < Route path="/contactus" element={<Contactus />} />
        < Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;