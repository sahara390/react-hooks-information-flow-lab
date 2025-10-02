import React, { useState } from "react";

import ShoppingList from "./ShoppingList";



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleToggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleToggleDarkMode} />
      <ShoppingList />
    
    </div>
  );
}

export default App;
