import React from 'react';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs'
import CompanyHistory from '../components/CompanyHistory';
import Cta from '../components/Cta';
import Hero from "../components/Hero";
import MainNav from "../components/MainNav";

function About() {
  return (
    <>
    <MainNav />
    <section className="about-page bg-[#f2f2f2]">
      <Hero title="About Us" bgImage="" />
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
