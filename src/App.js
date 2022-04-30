import React, { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { TerminalPage } from "./pages/TerminalPage";

function App() {
  const [operator, setOperator] = useState("");

  return (
    <Routes>
      <Route path="/" element={<HomePage setOperator={setOperator} />} />
      <Route path="/terminal" element={<TerminalPage operator={operator} />} />
    </Routes>
  );
}

export default App;
