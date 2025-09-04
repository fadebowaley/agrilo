import React from 'react';
import {Link} from 'react-router-dom';
import { FaDownload, FaBookOpen, FaPaperPlane } from 'react-icons/fa';

const Welcome = () => {
  return (
    <section className="py-16 px-10 font-[Roboto] bg-[#F2F2F2]">
      <div className="max-w-full mx-auto md:grid md:gap-14 md:grid-cols-3">
        {/* Hero Section */}
        <div className='flex flex-col w-full'>
            <img
                src="/about.jpg"
                alt="Agribusiness Hero"
                className="w-full h-full object-contain rounded-xl mb-5"
            />
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Link to='/book-consultation'
                className="flex justify-center items-center gap-4 bg-[#71B16C] hover:bg-[#71C16d] text-white px-6 py-3 rounded-md transition-colors"
              >
                <FaBookOpen />
                Book Consultation
              </Link>
               
            </div>
        </div>

        <div className="w-full mb-8 md:mb-0">
            <div className="mb-6">
                <h1 className="text-4xl md:text-4xl font-bold text-gray-800 font-[Poppins]">Welcome To JMSF Agribusiness</h1>
                <div className="w-[100px] h-[5px] bg-green-600 rounded-md mb-4 mt-6"/>
                <p className="text-lg font-semibold max-w-3xl mx-auto font-[Poppins] ">
                    We are an Agricultural advisory services provision consulting firm.
                </p>
            </div>
            {/* Description Section */}
            <div className="mb-4 text-gray-400 leading-loose text-sm space-y-4 max-w-4xl mx-auto">
                <p>
                    Our team of experts have in the last 15 years worked in the International Development sector in Nigeria and Africa delivering results and creating value for stakeholders in the agribusiness sector. For a long time, the Nigerian economy has been driven (and is still driven) by Oil and Gas with little improvements on the non-oil sectors, especially agriculture.
                </p>
                <p>
                    We help private individuals, institutional, local and international investors seeking to play in the Nigerian Agribusiness sector with expert advisory, policy analysis, ensuring good return on investment.
                </p>
            </div>

            <div className="flex flex-wrap justify-center">
              <button className="flex items-center gap-2 bg-[#71B16C] hover:bg-[#71C16d] text-white px-6 py-3 rounded-md transition-colors">
                <FaDownload />
                Download JMSF Brochure
              </button>
            </div>
            
        </div>
        
        {/* Request a Quote Form */}
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

      </div>
    </section>
  );
};

export default Welcome;