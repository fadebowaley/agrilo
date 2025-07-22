import React from 'react';
import AboutHero from '../components/AboutHero';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs'
import CompanyHistory from '../components/CompanyHistory';
import Cta from '../components/Cta';
import Navbar from '../components/Navigation';
import MainNav from "../components/MainNav";

function About() {
  return (
    <>
    <MainNav />
    <section className="about-page bg-[#f2f2f2] pb-30 mb-25">
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
