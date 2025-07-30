import React from 'react';
import Footer from '../components/Footer';
import TeamGrid from '../components/LeadershipGrid';
import MainNav from '../components/MainNav';
import Hero from '../components/Hero'

function Leadership(){
    return(
        <>
        <MainNav />
        <Hero title="Our Leadership " bgImage="/images/hero/blog.jpg" />
        <div className="flex flex-col items-center justify-center p-4">
            <TeamGrid />
        </div>
        <Footer />
        </>
    )
} 
export default Leadership