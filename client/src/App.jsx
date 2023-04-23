import React, { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState();

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
    <div className="App">
      {/* <button onClick={toggleDarkMode}>Activar/Desactivar modo oscuro</button>
          <div className={`${darkMode? "bg-black text-white z-20" : ""}`}> */}


      <AppRoutes
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </div>    

  );
};

export default App;
