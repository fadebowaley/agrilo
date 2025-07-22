//whyChooseUs.jsx
import gardener from "../assets/gardener.png";

function WhyChooseUs(){
    return (
        <>
        <div className="lg:px-40 flex flex-col gap-10 lg:gap-0  justify-center items-center lg:flex-row">
          <div className="p-4 font-['Roboto']">
      <h2 className="font-[1000] text-4xl">
            <span className="inline-block border-b border-b-[#1fa12e] border-b-[4px] pb-2">
              Peo
            </span>ple{" "}
            Choose Us
          </h2>
           <p className="mt-[20px] opacity-[0.7] text-[19px] mb-10 lg:text-[15px]">
           Since 1947, we've built a reputation for excellence in garden care,
            reliability, and customer satisfaction. We bring decades of experience
            and award-winning service into every project we take on.</p>
 <div className="flex gap-3 group">
  <div>
    <span className="fa-stack text-green-500 text-3xl">
  <i className="fa-solid fa-award fa-stack-2x"></i>
  <i className="fa-solid fa-dollar-sign fa-stack-1x fa-inverse"></i>
</span>
    </div>         
<div>
<h3 className="font-[600] text-xl mb-2 group-hover:text-[#1fa12e]"><a href="#">Quality And Reliability</a></h3>
<p className="font-[300]">We deliver consistent quality and dependable service every time.</p>
</div>
</div>
<div className="flex p-4  gap-4 group">
  <div>
    <i className="fa-solid fa-medal text-green-500 text-6xl mt-3"></i>
    </div>         
<div >
<h3 className="font-[600] text-xl mb-2 group-hover:text-[#1fa12e]"><a href="#">Award Winning Company</a></h3>
<p className="font-[300]">Recognized for excellence in the industry with multiple national awards.</p>

</div>
</div>

</div>

<div>
<img src={gardener}/>
</div>
</div>

        </>
    )
}
export default WhyChooseUs
