import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import TerminalView from "./components/Terminal/TerminalView";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import "./style.css";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <Router>
      <Preloader load={loading} />
      <div className="App" id={loading ? "no-scroll" : undefined}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/"           element={<Main />} />
          <Route path="/terminal"   element={<TerminalView />} />
          <Route path="/resume"     element={<Resume />} />
          <Route path="*"           element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
