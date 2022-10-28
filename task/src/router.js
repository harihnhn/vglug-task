import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/header.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Pagenotfound from "./pages/page_not_found.js";
import Footer from "./components/footer.js";

function Mainrouter() {
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/home" exact element={<Home/>} />
                <Route path="/about" exact element={<About/>} />
                <Route path="/contact" exact element={<Contact/>} />
                <Route path="*" element={<Pagenotfound/>} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Mainrouter;