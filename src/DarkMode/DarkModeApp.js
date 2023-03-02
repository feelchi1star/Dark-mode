import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";
import "./darkmode.css";
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
function DarkModeApp() {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            Switch to {theme === "light-theme" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
}

export default DarkModeApp;
