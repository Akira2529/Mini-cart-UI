import React  from "react";

const Settings = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <h1>Settings</h1>
      <p> Settings options will be displayed here </p>
      <div>
        <h2>Account Settings</h2>
        <p> Manage your account settings here </p>
      </div>
      <div>
        <h2>Notification Settings</h2>
        <p> Manage your notification preferences here </p>
      </div>
        <button onClick={() => setDarkMode(!darkMode)}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px",
        borderRadius: "5px", border: "none", cursor: "pointer", 
        backgroundColor: darkMode ? "#f0f0f0" : "#333", 
        color: darkMode ? "#333" : "#f0f0f0" }}>
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            
        </button>
    </div>
  );
};

export default Settings;
