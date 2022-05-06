import React from "react";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { TerminalPage } from "./pages/TerminalPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terminal/:operator" element={<TerminalPage />} />
    </Routes>
  );
}

export default App;
