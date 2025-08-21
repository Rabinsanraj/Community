import darkimg from '../Images/darkimg.jpg';
import { FaArrowDown } from "react-icons/fa6";
import { Growingcommunity, Weoffer, Upcommingevents } from '../Component/Firstpagecompo';
import { FcPortraitMode } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcKindle } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { RiBankFill } from "react-icons/ri";
import { useState,useRef } from 'react';
import food from '../Images/food1.jpg'
import office2 from '../Images/office2.jpg'

export function Firstpage() {

  const nextComponentRef = useRef(null);
  const handleScroll = () =>{
    nextComponentRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const [activeButton, setActiveButton] = useState("join our community");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }
  const activeStyle = {
    background: "linear-gradient(to right, #ff4800, #c41d00)", color: "white",
    border: "none", boxShadow: "0 0 10px 2px #ff4800",
  };

  const inactiveStyle = {
    border: "1px solid #ff4800",
    color: "#ff4800", fontWeight: "bold",
  };
  return (
    <>
      <div className="firstpage container-fluid position-relative d-flex flex-column justify-content-between"
        style={{backgroundImage: `url(${darkimg})`,backgroundSize: "cover",backgroundPosition: "center",  
        backgroundRepeat: "no-repeat",width: "100%",minHeight: "100vh",}}>
        
        <div style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)"}}></div>
        <div className=" flex-column d-flex justify-content-center align-items-center position-relative"
        style={{paddingTop:"130px"}}>
          <RiBankFill style={{ color: "#ff4800", fontSize: "4rem" }} />
          <h1 className="text-center display-5 text-white fw-bold pt-5">
            Orunginaintha Nayakar Naidu Peravai</h1>
          <div className="mx-auto mt-2" style={{
            height: "4px", width: "100px", borderRadius: "20px",
            background: "linear-gradient(to right,  #ff4800, #c41d00)"
          }}></div>
          <p className="text-white text-center pt-3 fw-light">
            Connecting our community, sharing opportunities, building our future <br />
            together with tradition, unity and progress
          </p>
          <div className="d-flex gap-3 pt-5 pb-5 justify-content-center flex-wrap">
            <button className="btn"
              style={activeButton === "join our community" ? activeStyle : inactiveStyle}
              onClick={() => handleButtonClick("join our community")}>
              Join Our Community
            </button>
            <button className="btn"
              style={activeButton === "explore features" ? activeStyle : inactiveStyle}
              onClick={() => handleButtonClick("explore features")}>
              Explore Features
            </button>
          </div>
          <div className="pt-5 pb-5" onClick={handleScroll} style={{ cursor: "pointer" }}>
            <FaArrowDown className="fs-3" style={{ color: "#c41d00" }} />
          </div>
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#e0e0e0ff" }}>
        <h1 className='fs-3 text-center pt-5 fw-bold'>Our Growing Community</h1>
        <div className='mx-auto' style={{
          height: "4px", width: "100px", borderRadius: "20px",
          background: "linear-gradient(to right,  #ff4800, #c41d00)",
        }}></div>
        <div className='row d-flex justify-content-center gap-5 align-items-center py-5'>
          <Growingcommunity icon={<FcPortraitMode />} number="5k+" text="Community Members" />
          <Growingcommunity icon={<FcHome />} number="50+" text="Sub Communities" />
          <Growingcommunity icon={<FcBriefcase />} number="200+" text="Job Opportunities" />
          <Growingcommunity icon={<FcKindle />} number="25+" text="Government Schemes" />
        </div>
      </div>


      <div ref={nextComponentRef} className='container-fluid' style={{ backgroundColor: "#ffffffff" }}>
        <h1 className='fs-3 text-center pt-5 fw-bold'>What We Offer</h1>
        <div className='mx-auto' style={{
          height: "4px", width: "100px", borderRadius: "20px",
          background: "linear-gradient(to right,  #ff4800, #c41d00)",
        }}></div>
        <p className='text-center fw-bold'>Discover the various ways we support and connect our community members</p>
        <div className="row d-flex justify-content-center gap-5 align-items-center py-5">
          <Weoffer icon={<IoIosPeople />} headtext="Community Networking"
            subtext="Connect with fellow community members, build lasting relationships, and expand your professional network." />
          <Weoffer icon={<FaCalendarAlt />} headtext="Cultural Events"
            subtext="Participate in traditional festivals, cultural programs, and community celebrations that preserve our heritage." />
          <Weoffer icon={<IoBagHandle />} headtext="Career Opportunities"
            subtext="Access job postings,career guidance, and professional development opportunities within our network." />
        </div>
        <div className="row d-flex justify-content-center gap-5 align-items-center pb-5">
          <Weoffer icon={<FaGraduationCap />} headtext="Educational Support"
            subtext="Scholarships, mentorship programs, and educational resources for students and lifeloan learners." />
          <Weoffer icon={<FaHandsHelping />} headtext="Social Welfare"
            subtext="Community support programs, healthcare initiatives, and assistance for those in need." />
          <Weoffer icon={<FaNetworkWired />} headtext="Business Network"
            subtext="Connect with entrepreneurs, find business partners, and explore collaboration oppartunities." />
        </div>
      </div>

      <div className='container-fluid' style={{ backgroundColor: "#e9ffebff" }}>
        <h1 className='fs-3 text-center pt-5 fw-bold'>Upcomming Events</h1>
        <div className='mx-auto' style={{
          height: "4px", width: "100px", borderRadius: "20px",
          background: "linear-gradient(to right,  #ff4800, #c41d00)",}}></div>
        <p className='text-center fw-bold pt-2'>Don`t miss out on our community gatherings</p>
        <div className="row d-flex justify-content-center gap-5 align-items-center">
          <Upcommingevents image={food} eventname="Annual Cultural Festival" eventdate="March 15, 2025" eventlocation="Community Center" />
          <Upcommingevents image={office2} eventname="Youth Leadership Workshop" eventdate="March 15, 2025" eventlocation="mani Hall" />
          <Upcommingevents image={office2} eventname="Community Service Day" eventdate="March 15, 2025" eventlocation="Various Locations" />
        </div>
        <div className="container d-flex justify-content-end pt-4 pb-4">
          <button className='btn btn-success mx-auto' style={{ border: "1px sold black" }}>View All Events</button>
        </div>
      </div>

      <div className="container-fluid py-5" style={{ backgroundColor: "#121f38" }}>
        <div className="d-flex justify-content-center">
          <RiBankFill style={{ color: "#ff4800", fontSize: "60px" }} />
        </div>
        <h1 className="fw-lighter text-center text-white pt-4"
          style={{ fontSize: "clamp(28px, 5vw, 50px)" }}>Join Our Growing Community</h1>
        <div className="mx-auto my-3"style={{height: "4px",width: "100px",
            borderRadius: "20px",background: "linear-gradient(to right,  #ff4800, #c41d00)",}}>
          </div>
        <p className="text-white text-center fw-lighter"
          style={{ fontSize: "clamp(16px, 3.5vw, 20px)", marginBottom: "6px" }}>Connect with fellow community members,
          find opportunities and build a stronger future</p>
        <p className="text-white text-center fw-lighter mb-4"
          style={{ fontSize: "clamp(16px, 3.5vw, 20px)" }}>together with tradition and progress</p>
        <div className="d-flex justify-content-center">
          <button className="btn fw-bold px-4 py-2"
            style={{background: "linear-gradient(to right, #ff4800, #c41d00)",color: "white",
              border: "none",borderRadius: "30px",}}>Register Now - it’s Free!</button>
        </div>
      </div>

    </>
  )
}