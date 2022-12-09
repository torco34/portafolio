import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "../container/About";
import { Header } from "../container/Header";
import { Home } from "../container/Home";
import { NotFund } from "../container/NotFund";
import { Project } from "../container/Project";
import { Skills } from "../container/Skills";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/skills" element={<Skills />}></Route>s
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFund />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
