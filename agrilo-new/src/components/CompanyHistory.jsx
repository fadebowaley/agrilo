
import back_image from "../assets/back_image.jpg";
import front_image from "../assets/about-img-1.jpg";

function CompanyHistory() {
  return (
    <>
      <div className="w-full lg:gap-2 max-w-[1200px] px-6 mx-auto flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        
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
        <div className="flex-1 p-4 font-['Roboto']">
          <h2 className="font-[1000] text-4xl">
            <span className="inline-block border-b border-b-[#1fa12e] border-b-[4px] pb-2">
              Our
            </span>{" "}
            Company History
          </h2>
          <h3 className="mt-4 text-[24px] font-[500]">
            From Local Roots to National Agricultural Impact
          </h3>
          <p className="mt-[20px] opacity-[0.7] lg:text-[15px]">
            JMSF Agribusiness began as a vision to empower smallholder farmers and reimagine agricultural value chains across Nigeria. In our early years, we focused on grassroots engagement — working directly with local communities to understand the real barriers to productivity and sustainability in the agri-sector. As our team grew, so did our ambitions. We moved beyond farming to embrace agribusiness consulting, agro-processing innovation, and supply chain optimization, bringing smart, scalable solutions to the heart of African agriculture.
          </p>
          <p className="mt-[20px] opacity-[0.7] lg:text-[15px]">
            Today, JMSF is recognized for its commitment to innovation, transparency, and community-driven impact. From developing export-ready agricultural products to advising on policy and investment, we've positioned ourselves as a trusted force in agribusiness transformation. Our history is rooted in resilience, and our future is planted firmly in opportunity.
          </p>
        </div>
      </div>
    </>
  );
}

export default CompanyHistory;
