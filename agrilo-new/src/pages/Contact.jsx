import React from 'react';
import Map from '../components/map';
import Form from '../components/form';
import Info from '../components/info';
import MainNav from '../components/MainNav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
function Contact(){
    return (
        <>
       <MainNav />
        <Hero title="Contact us" bgImage="/images/hero/blog.jpg" />
       <Map />
             <div className="md:gap-[30px] p-4 md:flex md:justify-center">

       <Info />
       <Form />
       </div>
       <Footer />
        </>
    )
}
export default Contact