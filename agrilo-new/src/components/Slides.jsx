import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "First Impressions Matter",
    title2: "Sustainable market-driven solutions",
    image: "/slides1.jpg",
    description: "Trust The Grounds Guys professionals to take care of your commercial or residential grounds",
    description2: "We offer Smart Solutions to improve the marker"
  },
  {
    id: 2,
    title: "First Impressions Matter",
    title2: "Value Chain and Market Development",
    image: "/slides2.jpg",
    description: "Trust The Grounds Guys professionals to take care of your commercial or residential grounds",
    description2: "We partner with Institution, local, and international investors entering the Nigerian, Ecowas, and African Agribusiness"
  },
  {
    id: 3,
    title: "First Impressions Matter",
    title2: "Development of Business Cases & Sectoral opportunities",
    image: "/slides3.jpg",
    description: "Trust The Grounds Guys professionals to take care of your commercial or residential grounds",
    description2: "We offer policy analysis, market systems research, feasibility and business planning"
  },
  {
    id: 4,
    title: "First Impressions Matter",
    title2: "Agricultural Advisory Services",
    image: "/slides4.jpg",
    description: "Trust The Grounds Guys professionals to take care of your commercial or residential grounds",
    description2: "We offer market systems research, feasibility, and business advisories"
  },
];

export default function Slides() {
  return (
    <div className="w-full pb-10">
      <Swiper
        modules={[EffectFade, Autoplay]}
        slidesPerView={1}
        loop
        effect="fade"
        speed={1200}
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        className="overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="relative w-full min-h-screen">
              {/* Ken Burns effect on image */}
              <div className="min-h-screen overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover min-h-screen scale-animation"
                />
              </div>

              {/* Overlayed Text */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4 swiper-fade-text z-10">
                {/* Mobile Title and Description */}
                <h2 className="text-5xl md:hidden font-bold mb-8 bg-gradient-to-r from-green-200 via-green-500 to-green-200 bg-clip-text text-transparent">
                  {slide.title2}
                </h2>
                <p className="text-lg md:hidden mb-4 animate-description">
                  {slide.description2}
                </p>

                {/* Desktop Title2 and Description2 */}
                <h2 className="hidden md:block text-6xl font-bold mb-6 bg-gradient-to-r from-green-200 via-green-500 to-green-200 bg-clip-text text-transparent animate-title">
                  {slide.title}
                </h2>
                <p className="hidden md:block text-xl mb-4 animate-description">
                  {slide.description}
                </p>

                <button className="bg-green-700 text-xl text-white px-6 py-2 rounded-md mt-10 font-medium animate-button hover:bg-green-800 transition-all duration-300">
                  Read More
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes kenBurnsZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }

        @keyframes fadeInLeftSlow {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRightBounce {
          0% {
            opacity: 0;
            transform: translateX(60px);
          }
          60% {
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scale-animation {
          animation: kenBurnsZoom 8s ease-in-out forwards;
        }

        .animate-title {
          animation: fadeInLeftSlow 1.5s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animate-description {
          animation: fadeInRightBounce 0.8s ease-out forwards;
          animation-delay: 1s;
          opacity: 0;
        }

        .animate-button {
          animation: slideUp 1.2s ease-out forwards;
          animation-delay: 2s;
          opacity: 0;
        }

        /* Hide text from non-active slides */
        .swiper-slide:not(.swiper-slide-active) .swiper-fade-text {
          opacity: 0 !important;
          pointer-events: none;
          transition: opacity 0.1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
