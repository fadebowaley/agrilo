import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Transforming Nigerian Agriculture",
    subtitle: "Sustainable Market-Driven Solutions",
    image: "/slides1.jpg",
    description:
      "Partnering with farmers and investors to create sustainable agricultural value chains across Nigeria and West Africa.",
    cta: "Our Services",
    ctaLink: "/services",
  },
  {
    id: 2,
    title: "Expert Agricultural Advisory",
    subtitle: "Value Chain & Market Development",
    image: "/slides2.jpg",
    description:
      "We partner with institutions, local and international investors entering the Nigerian, ECOWAS, and African agribusiness markets.",
    cta: "Get Consultation",
    ctaLink: "/book-consultation",
  },
  {
    id: 3,
    title: "Strategic Business Planning",
    subtitle: "Development of Business Cases & Sectoral Opportunities",
    image: "/slides3.jpg",
    description:
      "Comprehensive policy analysis, market systems research, feasibility studies and strategic business planning for agricultural ventures.",
    cta: "Learn More",
    ctaLink: "/about",
  },
  {
    id: 4,
    title: "Professional Advisory Services",
    subtitle: "Agricultural Consulting & Market Intelligence",
    image: "/slides4.jpg",
    description:
      "Expert market systems research, feasibility analysis, and comprehensive business advisory services for the agricultural sector.",
    cta: "Contact Us",
    ctaLink: "/contact",
  },
];

export default function Slides() {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        effect="fade"
        speed={1500}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          el: ".swiper-pagination-custom",
          clickable: true,
          bulletClass: "swiper-pagination-bullet-custom",
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        className="overflow-hidden slider-container">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="relative w-full h-screen">
              {/* Background Image with Ken Burns effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover scale-animation"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto text-center lg:text-left">
                    {/* Subtitle */}
                    <p
                      className="text-green-400 font-semibold text-sm sm:text-base md:text-lg mb-4 animate-fade-in-up"
                      style={{ animationDelay: "0.2s" }}>
                      {slide.subtitle}
                    </p>

                    {/* Main Title */}
                    <h1
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-up"
                      style={{ animationDelay: "0.4s" }}>
                      <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </h1>

                    {/* Description */}
                    <p
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
                      style={{ animationDelay: "0.6s" }}>
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div
                      className="flex justify-center lg:justify-start animate-fade-in-up"
                      style={{ animationDelay: "0.8s" }}>
                      <Link
                        to={slide.ctaLink}
                        className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group">
                        {slide.cta}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronRight className="h-6 w-6 text-white rotate-90" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-sm">
        <ChevronRight className="h-6 w-6 text-white rotate-180" />
      </div>
      <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-sm">
        <ChevronRight className="h-6 w-6 text-white" />
      </div>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2"></div>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes kenBurnsZoom {
          0% {
            transform: scale(1) rotate(0deg);
          }
          100% {
            transform: scale(1.1) rotate(1deg);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(60px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scale-animation {
          animation: kenBurnsZoom 12s ease-in-out infinite alternate;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        /* Custom pagination styles */
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active-custom {
          background: #16a34a;
          transform: scale(1.2);
        }

        /* Ensure text is visible on active slides only */
        .swiper-slide:not(.swiper-slide-active) .animate-fade-in-up {
          opacity: 0 !important;
        }

        .slider-container {
          height: 100vh;
          min-height: 600px;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .slider-container {
            height: 100vh;
            min-height: 500px;
          }
        }
      `}</style>
    </div>
  );
}
