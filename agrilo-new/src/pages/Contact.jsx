import React from 'react';
import Map from '../components/map';
import Form from '../components/form';
import Info from '../components/info';
import Navbar from '../components/Navigation';
import Footer from '../components/Footer';
function Contact(){
    return (
        <>
         <header>
    <nav className="fixed top-0 right-0 left-0 z-[9999]">
      <Navbar />
      </nav>
    </header> 
    <div className="mt-45">
       <Map />
       </div>
             <div className="md:gap-[30px] p-4 md:flex md:justify-center">

       <Info />
       <Form />
       </div>
       <Footer />
        </>
    )
}
export default Contact