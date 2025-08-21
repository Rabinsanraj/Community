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
            <div className="container py-5">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-6 text-center text-md-start">
                        <h5 className="mb-3 text-white">NaickerPeravai</h5>
                        <p className="text-white-50 mb-3">
                            Strengthening our community through unity,<br />
                            tradition, and progress. Join us in building a<br />
                            better future while honoring our heritage.
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3 mb-0">
                            <li style={{
                                backgroundColor: "gray", width: "40px", height: "40px", borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",}}>
                                <Link className="text-white fs-5">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li style={{
                                    backgroundColor: "gray", width: "40px", height: "40px", borderRadius: "50%",
                                    display: "flex", alignItems: "center", justifyContent: "center",}}>
                                <Link className="text-white fs-5">
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li style={{
                                backgroundColor: "gray", width: "40px", height: "40px", borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",}}>
                                <Link className="text-white fs-5">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li style={{
                                backgroundColor: "gray", width: "40px", height: "40px", borderRadius: "50%",
                                display: "flex", alignItems: "center", justifyContent: "center",}}>
                                <Link className="text-white fs-5">
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 text-center text-md-start">
                        <h5 className="mb-3 text-white">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="py-1">
                                <Link href="/" className="text-white-50 text-decoration-none">
                                    Home
                                </Link>
                            </li>
                            <li className="py-1">
                                <Link href="/about" className="text-white-50 text-decoration-none">
                                    About Us
                                </Link>
                            </li>
                            <li className="py-1">
                                <Link href="/events" className="text-white-50 text-decoration-none">
                                    Events
                                </Link>
                            </li>
                            <li className="py-1">
                                <Link href="/contact" className="text-white-50 text-decoration-none">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-4 col-md-12 text-center text-md-start">
                        <h5 className="mb-3 text-white">Contact Info</h5>
                        <ul className="list-unstyled text-white-50 py-2 mb-0">
                            <li className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 py-1">
                                <FaLocationDot /> 123 Community Street, Chennai - 600001
                            </li>
                            <li className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 py-1">
                                <BsFillTelephoneFill /> +91 98765 43210
                            </li>
                            <li className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 py-1">
                                <FaRegEnvelope /> info@naickerperavai.org
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="p-3" style={{ backgroundColor: '#020117ff' }}>
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Side */}
                        <div className="col-12 col-lg-6 text-center text-lg-start mb-2 mb-lg-0">
                            <p className="opacity-75 mb-0">
                                &copy; {new Date().getFullYear()} NaickerPeravai. All rights reserved.
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="col-12 col-lg-6 text-center text-lg-end">
                            <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-lg-end gap-3 mb-0">
                                <li className="fw-lighter opacity-75">Privacy Policy</li>
                                <li className="fw-lighter opacity-75">Terms of Service</li>
                                <li className="fw-lighter opacity-75">Cookie Policy</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}