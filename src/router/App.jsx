import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../container/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/project" element={<Project />}></Route>
        <Route path="/skills" element={<Skills />}></Route>s
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="*" element={<NotFund />}></Route> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
