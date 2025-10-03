import BottomFeatureSection from "./components/BottomFeatureSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import FeatureBoxSection from "./components/FeatureBoxSection";
import Footer from "./components/footer";
import HeroSection from "./components/Hero";
import NavBar from "./components/NavBar";
import TestimonialSection from "./components/TestimonialSection";
import TopFeatureSection from "./components/TopFeatureSection";

export default function LandingPage(){
    return(
        <div className="min-h-screen bg-[#F9FAFB] text-gray-900 antialiased overflow-hidden">
        <NavBar/>
        <HeroSection/>
        <TopFeatureSection/>
        <BottomFeatureSection/>
        <FeatureBoxSection/>
        <TestimonialSection/>
        <CTASection/>
        <FAQSection/>
        <Footer/>
        </div>
    )
}