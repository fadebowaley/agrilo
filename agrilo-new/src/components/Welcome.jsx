import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaDownload, FaBookOpen, FaPaperPlane } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha'; // <-- Add this import

const Welcome = () => {
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleRecaptcha = (value) => {
    setRecaptchaToken(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Collect other form data as needed
    const formData = {
      recaptchaToken,
      // ...other fields
    };
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      // Handle result (show success/error message)
      console.log(result);
    } catch (err) {
      // Handle error
      console.error(err);
    }
  };

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
                    We are an agricultural advisory services provision consulting firm. Our team of
experts have in the last 15 years worked in the International Development sector in
Nigeria and Africa delivering results and creating value for stake-holders in the
agribusiness sector. For a long time, the Nigerian economy has been driven (and is
still driven) by Oil and Gas with little improvements on the non-oil sectors, especially
agriculture.
                </p>
                <p>
                    Nigerian Agriculture comprises mainly of 4 key sectors Crop Production, Livestock,
Fisheries and Forestry with crop production representing about 88.6% and the rest
put together sharing 11.4%. Sadly, over 50% of the harvest from crop production is
lost due to a myriad of challenges and results in a huge economic loss to all actors in
the sector. The nation loses a lot of revenue in potential taxes and is unable to collect
same from actors because there is no structure on ground to make this a win-win for
all. We believe that any investment in the agribusiness sector should create value,
improve livelihoods, develop local economies via provision of services by local
operators in the various market systems and guarantee returns on the investment
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
            
            <form className="space-y-4" onSubmit={handleSubmit}>
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
              

              {/* Add reCAPTCHA */}
              <div>
                <ReCAPTCHA
                  sitekey="6LeX1ZQrAAAAAKH8l6nP2OSN-GdEynMcPt38RMSQ" // <-- Put your frontend site key here
                  onChange={handleRecaptcha}
                />
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