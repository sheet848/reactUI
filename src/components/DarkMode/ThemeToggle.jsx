const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full transition bg-gray-300 dark:bg-gray-800 text-black"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    );
  };
  
  export default ThemeToggle
  