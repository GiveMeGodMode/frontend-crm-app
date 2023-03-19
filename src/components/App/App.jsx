import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Main from "../../pages/Main";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
            <Footer />
            <div className="purple-ball"></div>
            <div className="red-ball"></div>
            <div className="red-ball_small"></div>
            <div className="purple-light"></div>
            <div className="red-light"></div>
        </div>
    );
}

export default App;
