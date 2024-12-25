import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext"; // Adjust the path
import darkIcon from "../../assets/images/darkmode.png";


const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <img
      src={darkIcon}
      onClick={toggleDarkMode}
      alt={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      
    />
  );
};



export default DarkModeToggle;
