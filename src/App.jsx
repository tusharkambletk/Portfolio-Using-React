import React, { useState, useEffect, useContext } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { ThemeContext } from "./components/context";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/ProductList/ProductList";
import Toggle from "./components/Toggle/Toggle";
import HashLoader from "react-spinners/HashLoader";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Education from "./components/Social/Social";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {loading ? (
        <div className="Loader">
          <HashLoader color={"3f5efb"} loading={loading} size={50} />
        </div>
      ) : (
        <div>
          <Toggle />
          <Intro />
          <About />
          <ProductList />
          <Experience />
          <Education />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default App;
