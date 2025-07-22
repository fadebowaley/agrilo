import React from 'react';
import Navbar from '../components/Navigation';
import Footer from '../components/Footer';
import TeamGrid from '../components/LeadershipGrid';
import MainNav from '../components/MainNav';

function Leadership(){
    return(
        <>
        <MainNav />
        <div className="flex flex-col items-center justify-center p-4">
            <TeamGrid />
        </div>
        <Footer />
        </>
    )
} 
export default Leadership