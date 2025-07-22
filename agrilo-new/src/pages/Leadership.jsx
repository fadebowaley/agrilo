import React from 'react';
import Navbar from '../components/Navigation';
import Footer from '../components/Footer';
import TeamGrid from '../components/LeadershipGrid';
function Leadership(){
    return(
        <>
        <header>
    <nav className="fixed top-0 right-0 left-0 z-[9999]">
      <Navbar />
      </nav>
    </header> 
        <div className="flex  mt-45 flex-col items-center justify-center p-4">
        <TeamGrid />
        </div>
        <Footer />
        </>
    )
} 
export default Leadership