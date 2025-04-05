import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const DarkMode = () => {

    // Load theme from localStorage or default to "light"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme class to <html> and save to localStorage
  useEffect(() => {
    //document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme between "light" and "dark"
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
    <div className={`${theme} flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white`} >
      <h1 className="text-2xl mb-4">Light/Dark Mode Toggle</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
    </>
  )
}

export default DarkMode