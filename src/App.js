import React ,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./menucomponent/sidebar";
import Home from "./menucomponent/home";
import Cart from "./menucomponent/cart";
import Products from "./menucomponent/products";
import Settings from "./menucomponent/setting";
import Profile from "./menucomponent/profile";

function App() {

const [darkMode , setDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <div style={{
        display: "flex",
        backgroundColor: darkMode ? "#333" : "#f0f0f0",
        color: darkMode ? "#f0f0f0" : "#333",
        minHeight: "100vh",
      }}>
        <Sidebar darkMode={darkMode} />
        <div
          style={{
            flex: 1,
            padding: "20px",
            marginLeft: "250px",
          }}
        >

           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings"
             element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>
        </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;