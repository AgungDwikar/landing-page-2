import React, { useState, useEffect } from "react";
import Banner from "../Banner";
import Features from "../Features";
import Footer from "../Footer";
import OurInstructor from "../OurInstructor";
import OurPartners from "../OurPartners";
import Portofolio from "../Portofolio";
import Testimonials from "../Testimonials";
import Hero from "../Hero";
import Loaders from "../../components/loader/Loaders";
import LandingPage from "./LandingPage";
import "./darkmode.css";

function Landing() {
    const [Loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });

    return (
        <div>
            {Loading === true ? (
                <Loaders />
            ) : (
                <div data-aos="fade-up">
                    <div
                        className={
                            darkMode ? " bg-slate-900 text-slate-300 " : "bg-white"
                        }
                    >
                        <LandingPage />
                        <div>
                            <div className="switc-checkbox container mt-0 pt-10  flex  ">
                                {/* <span className="icons" style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span> */}
                                <p className="mr-2 text-2xl">☀︎</p>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        onChange={() => setDarkMode(!darkMode)}
                                    />
                                    <span className="slider round border-2"></span>
                                </label>
                                <p className="ml-2 text-2xl">☽</p>
                                {/* <span style={{ color: "grey" }}>☽</span> */}
                            </div>
                            <Hero />
                        </div>
                        <Features />
                        <Banner />
                        <Testimonials />
                        <OurInstructor />
                        <OurPartners />
                        <Portofolio />
                        <Footer />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Landing;
