import React, { useState } from "react";
import moment from "moment";

function LightDark() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  const [data, setData] = useState([
    {
      id: 1,
      title: "the WET Codbase",
      date: new Date(2020, 9, 4),
      length: 11,
      snippet: `Come waste your time with me`,
    },
    {
      id: 2,
      title: "goodbye, clean code",
      date: new Date(2019, 10, 22),
      length: 5,
      snippet: `Let clean code guide you. Then let it go.`,
    },
    {
      id: 3,
      title: "my decade in review",
      date: new Date(2018, 7, 11),
      length: 5,
      snippet: `A personal reflection.`,
    },
    {
      id: 4,
      title: "what are the react team principles",
      date: new Date(2015, 5, 4),
      length: 5,
      snippet: `UI Before API.`,
    },
  ]);

  return (
    <div className={`main-container ${theme}`}>
      <nav className="nav">
        {theme === "dark-theme" ? (
          <i
            className="bi bi-toggle-on"
            style={{ fontSize: "40px", cursor: "pointer" }}
            onClick={toggleTheme}
          ></i>
        ) : (
          <i
            className="bi bi-toggle-off"
            style={{ fontSize: "40px", cursor: "pointer" }}
            onClick={toggleTheme}
          ></i>
        )}
      </nav>

      <div className="app">
        <h1>OverReactor</h1>
        {data.map((a) => (
          <div key={a.id}>
            <h3 className="head">{a.title}</h3>
            <span>{moment(a.date).format("dddd Do, YYYY")}</span>
            <p>{a.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LightDark;
