import React from "react";
import './index.css';  
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/asklextask/theme";
import Asklex from "./components/asklextask";
import Sec from "./components/asklextask/sec";
import Third from "./components/asklextask/third";
import LoginModal from "./components/asklextask/login";
import SignUpModal from "./components/asklextask/signup";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Asklex />} />
          <Route path="/sec" element={<Sec />} />
          <Route path="/third" element={<Third />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/signup" element={<SignUpModal />} />
          {/* Optional: Add a default route */}
          <Route path="/index" element={<Asklex />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
