import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const modules = import.meta.glob('/src/assets/partners/*.{png,jpg,jpeg}', {
  eager: true,
  as: 'url',
});
const logos = Object.values(modules);

function Partners() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisibleCount(4);
      else if (window.innerWidth >= 768) setVisibleCount(3);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const prev = () =>
    setIndex((i) => (i - visibleCount < 0 ? logos.length - visibleCount : i - visibleCount));
  const next = () =>
    setIndex((i) => (i + visibleCount >= logos.length ? 0 : i + visibleCount));

  const visible = logos.slice(index, index + visibleCount);

  return (
    <div className="relative px-4 py-18 w-full overflow-hidden">
      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-[#1fa12e] p-3 text-white rounded"
      >
        <FaChevronLeft className="text-2xl" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 bg-[#1fa12e] p-3 text-white rounded"
      >
        <FaChevronRight className="text-2xl" />
      </button>

      {/* Logos as Anchor Links */}
      <div className="flex gap-6 justify-center items-center">
        {visible.map((url, i) => (
          <a
            key={i}
            href="/#LogoGrid"
            className="group relative block"
            aria-label={`Jump to full partners - Partner ${i + index + 1}`}
          >
            <img
              src={url}
              alt={`Partner ${i + index + 1}`}
              className="w-[200px] sm:w-[150px] object-contain grayscale group-hover:grayscale-0 transition duration-300 hover:opacity-90"
            />
            <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-2 py-1 rounded z-20 whitespace-nowrap">
              Click to see full partners
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Partners;
