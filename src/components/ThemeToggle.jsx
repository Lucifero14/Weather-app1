import React from 'react';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="border px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
