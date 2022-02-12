import Banner from "./components/Banner";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurInstructor from "./components/OurInstructor";
import OurPartners from "./components/OurPartners";
import Portofolio from "./components/Portofolio";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className="App">
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
    );
}

export default App;
