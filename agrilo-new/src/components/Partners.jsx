import { useState, useEffect } from "react";
import Oxien from "../assets/oxien.png";
import Psd from "../assets/psd.png";
import Butterfly from "../assets/butterfly.png";
import Mahind from "../assets/mahind.png";
import Kelly from "../assets/kelly.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const logos = [Oxien, Psd, Butterfly, Mahind, Kelly];

function Partners() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const updateVisible = () => {
    if (window.innerWidth >= 1024) setVisibleCount(4);
    else if (window.innerWidth >= 768) setVisibleCount(3);
    else setVisibleCount(1);
  };

  useEffect(() => {
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? logos.length - visibleCount : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev + visibleCount >= logos.length ? 0 : prev + 1));
  };

  const visibleLogos = logos.slice(index, index + visibleCount);

  return (
    <>
      <div className="relative px-4 py-18 w-full overflow-hidden">
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 rounded-[5px] top-1/2 transform -translate-y-1/2 z-10 bg-[#1fa12e] text-white p-3 hover:bg-gray-500"
        >
          <FaChevronLeft className="text-2xl" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 rounded-[5px] top-1/2 transform -translate-y-1/2 z-10 bg-[#1fa12e] text-white p-3 hover:bg-gray-500"
        >
          <FaChevronRight className="text-2xl" />
        </button>

        {/* Logos */}
        <div className="flex gap-6 justify-center items-center">
          {visibleLogos.map((logo, i) => (
            <img key={i} src={logo} className="w-[250px] sm:w-[150p] sm:h-auto block" />
          ))}
        </div>
      </div>
    </>
  );
}

export default Partners;
