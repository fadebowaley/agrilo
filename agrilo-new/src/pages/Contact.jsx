import React from 'react';
import Map from '../components/map';
import Form from '../components/form';
import Info from '../components/info';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
function Contact(){
    return (
        <>
       <Navigation /> 
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