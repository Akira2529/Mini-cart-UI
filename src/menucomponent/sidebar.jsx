import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  Package,
  User,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#1f2937",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Mini Cart</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Link
            to="/home"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              gap: "10px",
            }}
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          
          
        </li>

        <li style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <ShoppingCart size={20} />
          <span>Cart</span>
        </li>

        <li style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Package size={20} />
          <span>Products</span>
        </li>

        <li style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <User size={20} />
          <span>Profile</span>
        </li>

        <li style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Settings size={20} />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;