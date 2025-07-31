import TeamGrid from '../components/TeamGrid'
import MainNav from '../components/MainNav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Partners from '../components/Partners'

function Patners(){
    return(
        <>
        <MainNav />
        <Hero title="Our Patners" bgImage="/images/hero/blog.jpg" />
        {/* <section className="bg-[#f2f2f2]">
            <TeamGrid />
        </section> */}
        <section>
            <Partners />
        </section>
        <Footer />
        </>
    )
}
export default Patners