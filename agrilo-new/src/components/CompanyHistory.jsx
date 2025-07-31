import back_image from "../assets/back_image.jpg";
import front_image from "../assets/about-img-1.jpg";

function CompanyHistory() {
  return (
    <>
      <div className="w-full lg:gap-20 max-w-[1200px] px-6 mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start py-15">
        
        {/* IMAGE SECTION */}
        <div className="flex-1 relative max-w-[470px] w-full">
          <div className="w-[370px] h-[370px] lg:w-[470px] lg:h-[470px] p-[13px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)]">
            <img
              src={back_image}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-[25%] left-[25%] w-[300px] h-[300px] p-[13px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.15)] 
                         lg:top-[40%] lg:left-[50%]">
            <img
              src={front_image}
              alt="Foreground"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="flex-1 p-4 font-['Roboto'] lg:-mt-7">
          <h2 className="font-[1000] text-4xl">
            <span className="inline-block border-b border-b-[#1fa12e] border-b-[4px] pb-2">
              Our
            </span>{" "}
            Company History
          </h2>
          <h3 className="mt-4 text-[24px] font-[500]">
            From Local Roots to National Agricultural Impact
          </h3>
          <p className="mt-[20px] lg:my-[10px] opacity-[0.7] lg:text-[15px]">
            JMSF Agribusiness is an agricultural advisory services provision consulting firm. Our team of 
experts have in the last 15 years worked in the International Development sector in 
Nigeria and Africa delivering results and creating value for stake-holders in the 
agribusiness sector. For a long time, the Nigerian economy has been driven (and is 
still driven) by Oil and Gas with little improvements on the non-oil sectors, especially 
agriculture. </p>
<h3 className="my-[20px] text-center text-4xl font-bold"><span className="inline-block border-b border-b-[#1fa12e] border-b-[4px] pb-2">
              Our
            </span>{" "}vision</h3>
          <p className="opacity-[0.7] lg:text-[15px]">
           To promote accelerated development of the opportunities   in 
the agribusiness services markets, creating value, jobs and 
incomes, better quality on finished produce and reduced 
wastage, ensuring that no harm is done to the environment</p>
<h3 className="my-[20px] lg:my-[10px] text-center text-4xl font-bold"><span className="inline-block border-b border-b-[#1fa12e] border-b-[4px] pb-2">
              Our
            </span>{" "}mission</h3>
          <p className="opacity-[0.7] lg:text-[15px]">
           To provide  sustainable market driven solutions to institutional, 
local and international investors entering the Nigerian 
Agribusiness Sector</p>
        </div>
      </div>
    </>
  );
}

export default CompanyHistory;
