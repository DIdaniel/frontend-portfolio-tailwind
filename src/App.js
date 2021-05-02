import React, { useState } from "react";
import About from "./components/About";
import AboutSecond from "./components/AboutSecond";
import Article from "./components/Article";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Show from "./components/Show";
import Footer from "./components/Footer";

function App() {
  const [pos, setPos] = useState(0);

  return (
    <>
      <Header />
      <Show pos={pos} setPos={setPos} />
      <About />
      <Grid />
      <AboutSecond />
      <Article />
      <Footer />
    </>
  );
}

export default App;
