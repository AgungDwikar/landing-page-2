import React, { useState, useEffect } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Features from "./Features";
import Footer from "./Footer";
import OurInstructor from "./OurInstructor";
import OurPartners from "./OurPartners";
import Portofolio from "./Portofolio";
import Testimonials from "./Testimonials";
import Hero from "./Hero";
import Loaders from "../components/loader/Loaders";

function LandingPage() {
    const [Loading, setLoading] = useState(true);

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
                    <Header />
                    <Hero />
                    <Features />
                    <Banner />
                    <Testimonials />
                    <OurInstructor />
                    <OurPartners />
                    <Portofolio />
                    <Footer />
                </div>
            )}
        </div>
    );
}

export default LandingPage;
