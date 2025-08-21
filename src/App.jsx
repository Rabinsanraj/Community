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
      <nav className="navbar navbar-expand-lg position-fixed w-100" style={{ backgroundColor: '#001122ff', zIndex: 1000 }}>
        <Link href="/" className="d-flex align-items-center ps-4 text-decoration-none">
          <TbLetterNSmall className="text-white me-2"
            style={{background: "linear-gradient(to right, #ff4800ff, #c41d00ff)",
              borderRadius: "10px",fontSize: "50px",boxShadow: "0 0 10px 1px #ff4800cc",}}/>
          <span className="navbar-brand playfair-font text-white mb-0">Nayakar Naidu Peravai</span>
        </Link>
        <button className="navbar-toggler ms-auto me-4"
          type="button"data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
          style={{ background: "linear-gradient(to right, #ff4800ff, #c41d00ff)", border: "none" }}>
          <GiHamburgerMenu className="text-white" style={{ fontSize: '25px' }} /></button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex justify-content-center justify-content-lg-start mx-auto mx-lg-0 my-3 my-lg-0 gap-3"
            style={{backgroundColor: '#041a30ff',
              borderRadius: '50px',padding: '8px 25px',width: "fit-content"}}>
            <button className="btn border-0"
              style={language === "english" ? langactiveStyle : langinactiveStyle}
              onClick={() => handleLanguageChange("english")}>English </button>
            <button className="btn border-0"
              style={language === "tamil" ? langactiveStyle : langinactiveStyle}
              onClick={() => handleLanguageChange("tamil")}>Tamil</button>
          </div>
          <ul className="navbar-nav ms-lg-auto text-center mt-3 me-3 mt-lg-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link text-white" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">Communities</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">Jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">Schemes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">Events</Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center mt-3 me-4 mt-lg-0 pb-lg-0 pb-3 gap-3">
            <button className="btn"style={activeButton === "login" ? activeStyle : inactiveStyle}
              onClick={() => handleClick("login")}>Login</button>
            <button className="btn"style={activeButton === "register" ? activeStyle : inactiveStyle}
              onClick={() => handleClick("register")}>Register</button>
          </div>
        </div>
      </nav>
      <div style={{ paddingTop: "0px", }}>

        <Routes>
          <Route path="/" element={<Firstpage />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
