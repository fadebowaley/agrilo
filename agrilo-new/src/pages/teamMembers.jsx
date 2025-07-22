import TeamGrid from '../components/TeamGrid'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'
import Partners from '../components/Partners'

function TeamMembers(){
    return(
        <>
        <MainNav />
        <section className="bg-[#f2f2f2]">
            <TeamGrid />
        </section>
        <section>
            <Partners />
        </section>
        <Footer />
        </>
    )
}
export default TeamMembers