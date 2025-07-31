import MainNav from "../components/MainNav"
import Hero from "../components/Hero"
import { FaPaperPlane } from "react-icons/fa"

function Quote(){
    return(
        <>
        <MainNav />
        <Hero title='Get Quote' bgImage="./" />
        <div className='w-full flex mb-12'>
            <div className="w-full mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Request a Quote</h2>
            
            <form className="space-y-4">
                <div>
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-2 bg-[#F2F2F2] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                </div>
                <div>
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-[#F2F2F2] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                </div>
                <div>
                <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full bg-[#F2F2F2] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                </div>
                <div>
                <textarea 
                    placeholder="Message" 
                    rows="4"
                    className="w-full bg-[#F2F2F2] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                </div>
                <div>
                <div className="flex items-center gap-2">
                    <span className="text-gray-700">5 +7 = ?</span>
                    <input 
                    type="text" 
                    className="w-20 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 pt-4">
                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors">
                    <FaPaperPlane />
                    SUBMIT
                </button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}

export default Quote