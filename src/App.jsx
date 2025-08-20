import { TbLetterNSmall } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { Routes, Route, Link } from "react-router-dom";
import { Firstpage } from '../Pages/Home';
import { Footer } from '../Component/Footer';
import { useState } from "react";
import './App.css';

function App() {
  const [activeButton, setActiveButton] = useState("login");
  const [language, setLanguage] = useState("english");
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  const handleClick = (button) => {
    setActiveButton(button);
  };
  // -----Login-------
  const activeStyle = {
    background: "linear-gradient(to right, #ff4800ff, #c41d00ff)", color: "white",
    border: "none", boxShadow: "0 0 10px 2px #ff4800cc",
  };

  const inactiveStyle = {
    border: "1px solid #ff4800ff",
    color: "#ff4800ff", opacity: 0.7, fontWeight: "bold",
  };
  // ------lang---------
  const langactiveStyle = {
    background: "linear-gradient(to right, #ff4800ff, #c41d00ff)", color: "white",
    borderRadius: "30px", boxShadow: "0 0 10px 2px #ff4800cc",
  };

  const langinactiveStyle = {
    color: "#ff4800ff", opacity: 0.7,
    borderRadius: "30px",
    fontWeight: "bold",
  };
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg position-fixed w-100" style={{ backgroundColor: '#001122ff' }}>
        <Link href="/" className="ps-4"><TbLetterNSmall className="text-white me-2" style={{
          background: "linear-gradient(to right, #ff4800ff, #c41d00ff)",
          borderRadius: "10px", fontSize: "50px", boxShadow: "0 0 10px 1px #ff4800cc",
        }} /></Link>
        <Link className="navbar-brand playfair-font text-white" href="/">Nayakar Naidu Peravai</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation" style={{ background: "linear-gradient(to right, #ff4800ff, #c41d00ff)", border: "none", }}>
          <GiHamburgerMenu className='text-white' style={{ fontSize: '25px' }} />
        </button>
        <div className="collapse navbar-collapse gap-5" id="navbarNav">

          <div className="d-flex mx-auto ms-5 gap-3" style={{ backgroundColor: '#041a30ff', borderRadius: '50px', padding: '8px 25px' }}>
            <button className="btn border-0" style={language === "english" ? langactiveStyle : langinactiveStyle}
              onClick={() => handleLanguageChange("english")}>English</button>
            <button className="btn border-0" style={language === "tamil" ? langactiveStyle : langinactiveStyle}
              onClick={() => handleLanguageChange("tamil")}>Tamil</button>
          </div>

          <ul className="d-flex gap-2 navbar-nav ms-auto">
            <li className="nav-item ">
              <Link className="nav-link text-white hover:text-info" href="/">Home</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white" href="#">Communities</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white" href="#">Jobs</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white" href="#">Schemes</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white" href="#">Events</Link>
            </li>
          </ul>
          <div className="d-flex gap-1">
            <button className="btn me-4" style={activeButton === "login" ? activeStyle : inactiveStyle}
              onClick={() => handleClick("login")}>Login</button>
            <button className="btn me-4" style={activeButton === "register" ? activeStyle : inactiveStyle}
              onClick={() => handleClick("register")}>Register</button>
          </div>
        </div>
      </nav>

      <div style={{ paddingTop: "65px", }}>

        <Routes>
          <Route path="/" element={<Firstpage />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
