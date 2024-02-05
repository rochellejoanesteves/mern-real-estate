import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import SignIn from "./pages/sign-in/index";
import SignUp from "./pages/sign-up/index";
import Profile from "./pages/profile/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
