import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./menucomponent/sidebar";
import Home from "./menucomponent/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    <div  style={{ display: "flex" }}>
      <Sidebar />
       <div style={{ padding: "20px" }}>
        <h1>Welcome to Mini Cart</h1>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;