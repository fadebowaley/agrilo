import TeamGrid from '../components/TeamGrid'
import Navbar from '../components/Navigation'
import Footer from '../components/Footer'
import Partners from '../components/Partners'
function TeamMembers(){
    return(
        <>
        <header>
            <nav className="fixed top-0 right-0 left-0 z-[9999]">
              <Navbar />
              </nav>
            </header> 
        <section className="mt-37 md:mt-70 lg:mt-45 bg-[#f2f2f2]">
<TeamGrid />
        </section>
        <section>
            <Partners />
        </section>
        <footer className="">
        <Footer />
        </footer>
        </>
    )
}
export default TeamMembers