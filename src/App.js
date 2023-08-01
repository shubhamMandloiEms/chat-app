import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import { Component1 } from "./components/Component1";
import { Component2 } from "./components/Component2";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/home" element={<Home />} />
          <Route path="/component1" element={<Component1 />} />
          <Route path="/component2" element={<Component2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
