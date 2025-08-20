import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#0e182e' }}>
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                        <h5 className="mb-3">NaickerPeravai</h5>
                        <p>Strengthening our community through unity,<br/>
                            tradition, and progress.  Join us in building a<br />
                            better future while honorinf our heritage.
                        </p> 
                        <ul className="list-unstyled d-flex gap-3 ">
                            <li style={{backgroundColor: "gray",width: "40px",height: "40px",
                                borderRadius: "50%",display: "flex",alignItems: "center",
                                justifyContent: "center"}}>
                                <Link className="text-white fs-5"><FaFacebookF /></Link>
                            </li>
                            <li style={{backgroundColor: "gray",width: "40px",height: "40px",
                                borderRadius: "50%",display: "flex",alignItems: "center",
                                justifyContent: "center"}}>
                                <Link className="text-white fs-5"><FaTwitter /></Link>
                            </li>
                            <li style={{backgroundColor: "gray",width: "40px",height: "40px",
                                borderRadius: "50%",display: "flex", alignItems: "center",
                                justifyContent: "center"}}>
                                <Link className="text-white fs-5"><FaInstagram /></Link>
                            </li>
                            <li style={{backgroundColor: "gray",width: "40px",height: "40px",
                                borderRadius: "50%",display: "flex",alignItems: "center",
                                justifyContent: "center"}}>
                                <Link className="text-white fs-5"><FaLinkedinIn /></Link>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="py-1"><Link href="/" className="text-white text-decoration-none">Home</Link></li>
                            <li className="py-1"><Link href="/about" className="text-white text-decoration-none">About Us</Link></li>
                            <li className="py-1"><Link href="/events" className="text-white text-decoration-none">Events</Link></li>
                            <li className="py-1"><Link href="/contact" className="text-white text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="mb-3">Contact Info</h5>
                        <ul className="list-unstyled py-2">
                            <li className="d-flex align-items-center gap-2 py-1">
                                < FaLocationDot /> 123 Community Streer Chennai - 600001
                            </li>
                            <li className="d-flex align-items-center gap-2 py-1">
                                < BsFillTelephoneFill /> +91 98765 43210
                            </li>
                            <li className="d-flex align-items-center gap-2 py-1">
                                <FaRegEnvelope/>info@naickerperavai.org
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-3" style={{ backgroundColor: '#020117ff' }}>
                <div className="container d-flex">
                    <p className="opacity-75">&copy; {new Date().getFullYear()} NaickerPeravai. All rights reserved.</p>
                    <ul className="list-unstyled d-flex  gap-3 ms-auto">
                        <li className="fw-lighter opacity-75">Privacy Policy</li>
                        <li className="fw-lighter opacity-75">Terms of Service</li>
                        <li className="fw-lighter opacity-75">Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}