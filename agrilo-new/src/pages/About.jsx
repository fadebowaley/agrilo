import React from 'react';
import AboutHero from '../components/AboutHero';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs'
import CompanyHistory from '../components/CompanyHistory';
import Cta from '../components/Cta';
import Navbar from '../components/Navigation';
function About() {
  return (
    <>
    
      
   <header>
    <nav className="fixed top-0 right-0 left-0 z-[9999]">
      <Navbar />
      </nav>
    </header> 
    <section className="about-page bg-[#f2f2f2] mt-45 pb-30 mb-25">
      <AboutHero />
      <CompanyHistory />
    </section>
    <section className="">
      <WhyChooseUs />
      <Cta />
    </section>
    <footer>
      <Footer />
    </footer>
    </>
  );
}

export default About;
