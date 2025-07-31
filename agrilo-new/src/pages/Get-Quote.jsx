import MainNav from "../components/MainNav"
import Hero from "../components/Hero"
import QuoteForm from "../components/QuoteForm"

function Quote(){
    return(
        <div>
            <MainNav />
            <Hero title="Get Quote" bgImage="./" />

            <div className="w-full flex justify-center">
                <div className="w-full md:w-1/2 flex justify-center items-center mb-12">
                <QuoteForm />
                </div>
            </div>
        </div>
    )
}

export default Quote