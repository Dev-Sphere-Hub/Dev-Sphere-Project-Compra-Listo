import React, { useState, useEffect } from "react";

const DarkModeToggle = ({ defaultDarkMode = false }) => {
  const [darkMode, setDarkMode] = useState(defaultDarkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    return () => {
      document.body.classList.remove("dark");
    };
  }, [darkMode]);

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Apagar modo oscuro" : "Encender modo oscuro"}
    </button>
  );
};

export default DarkModeToggle;
