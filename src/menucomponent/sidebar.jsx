import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  Package,
  User,
  Settings,
} from "lucide-react";




const Sidebar = ({ darkMode }) => {

  const linkStyle = {
  color: darkMode ? "#ffffff" : "#000000",
  textDecoration: "none",
  display: "flex",
  gap: "10px",
  alignItems: "center",
};

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: darkMode ? "#1f2937" : "#f5f5f5",
        color: darkMode ? "#f5f5f5" : "#1f2937",
        padding: "10px",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      
      <h2 style={{ marginBottom: "30px" }}>Mini Cart</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Link
            to="/home"
            style={linkStyle}
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          
          
        </li>

        <li style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
         <Link
            to="/cart"
            style={linkStyle}
          >
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>
        </li>

        <li style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Link
            to="/products"
            style={linkStyle}
          >
            <Package size={20} />
            <span>Products</span>
          </Link>
        </li>

        <li style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Link
            to="/profile"
            style={linkStyle}
          >
            <User size={20} />
            <span>Profile</span>
          </Link>
        </li>

        <li style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Link
            to="/settings"
            style={linkStyle}
          >
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;