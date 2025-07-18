import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TeamGrid from '../components/team-grid';
function TeamMembers(){
    return(
        <>
        <Navigation />
        <div className="flex flex-col items-center justify-center p-4">
        <TeamGrid />
        </div>
        <Footer />
        </>
    )
} 
export default TeamMembers