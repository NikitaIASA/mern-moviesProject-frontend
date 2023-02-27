import React, { createContext, useEffect } from "react";

export const ThemeContext = createContext();

const defaultTheme = "light";
const darkTheme = "dark";

const getTheme = () => localStorage.getItem("theme");

const updateTheme = (theme, themeToRemove) => {
  if (themeToRemove) document.documentElement.classList.remove(themeToRemove); // removing class in the html-element

  document.documentElement.classList.add(theme); // adding class in the html-element
  localStorage.setItem("theme", theme);
};

export default function ThemeProvider({ children }) {

  const toggleTheme = () => {
    const oldTheme = getTheme(); // getting theme from localStorage
    const newTheme = oldTheme === defaultTheme ? darkTheme : defaultTheme; // toggling the theme

    updateTheme(newTheme, oldTheme);
  };

  useEffect(() => {
    const theme = getTheme(); // getting theme from localStarage
    if (!theme) updateTheme(defaultTheme); // if there no theme --> defaultTheme (light);
    else updateTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


