import { useState } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRightIcon,
} from "lucide-react";

const menuItems = [
  {
    label: "HOME",
    href: "./index.html",
  },
  {
    label: "ABOUT US",
    children: [
      { label: "About us", href: "https://jmsfagribusiness.com/about-us/" },
      { label: "The Leadership", href: "https://jmsfagribusiness.com/team-grid-1/" },
      { label: "Our Team", href: "https://jmsfagribusiness.com/our-team-members/" },
    ],
  },
  {
    label: "OUR SERVICES",
    children: [
      {
        label: "What we Offer",
        href: "https://jmsfagribusiness.com/service/renewable-energy-and-waste-management/",
      },
      { label: "Investment", href: "https://jmsfagribusiness.com/investment/" },
    ],
  },
  {
    label: "NEWS AND MEDIA",
    children: [
      { label: "Blogs", href: "https://jmsfagribusiness.com/blog-layout-3/blogs/" },
    ],
  },
  {
    label: "CONTACT US",
    href: "https://jmsfagribusiness.com/contact/",
  },
  {
    label: "BOOK CONSULTATION",
    href: "https://jmsfagribusiness.com/book-consultation/",
  },
];

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const currentPath = window.location.pathname;

  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#f5f5f5] text-sm text-gray-700 px-10">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          <span className="text-lg font-semibold italic text-gray-600">........Growing the Economy</span>
          <div className="flex md:gap-6 lg:gap-6 gap-4 items-center">
            <Facebook className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Logo and Contact */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-3 px-10 gap-6 md:mb-3">
        {/* Logo and Hamburger */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src="/logo.png" alt="Logo" className="h-12" />
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Contact Info (Desktop Only) */}
        <div className="hidden md:flex flex-col sm:flex-row items-center gap-12 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <Phone className="text-green-600 w-12 h-12" />
            <div className="flex flex-col">
              <a href="tel:+2348129460848" className="font-medium text-black hover:text-green-600">
                +234 812 946 0848
              </a>
              <span className="text-gray-500">Mon-Fri, 7:00am - 5.00pm</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-green-600 w-10 h-10" />
            <div className="flex flex-col">
              <a
                href="mailto:info@jmsfagribusiness.com"
                className="font-medium text-black hover:text-green-600"
              >
                info@jmsfagribusiness.com
              </a>
              <span className="text-gray-500">Mail Us</span>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="">
          <a
            href="https://jmsfagribusiness.com/contact/"
            className="hidden md:flex gap-2 items-center justify-center bg-green-600 text-white font-semibold px-5 py-3 rounded-full text-sm border border-transparent hover:text-green-700 hover:bg-white hover:border-green-600 transition-colors duration-300"
          >
            Contact us
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-t-[0.5px] border-b-[0.5px] border-gray-300 bg-white">
        <div className="container mx-auto px-4">
          <ul
            className={`flex flex-col md:flex-row md:items-center md:justify-center text-sm font-semibold text-black ${
              isMobileMenuOpen ? "block bg-green-50 px-4 rounded-b-lg shadow-md" : "hidden"
            } md:flex gap-2 md:gap-0`}
          >
            {menuItems.map((item) => {
              const isActive =
                item.href && currentPath === new URL(item.href, window.location.origin).pathname;

              return (
                <li
                  key={item.label}
                  className={`relative group ${
                    isMobileMenuOpen
                      ? "border-b border-gray-200 py-3"
                      : "md:border-l md:border-r border-gray-200 md:px-6 py-2 md:py-4"
                  } ${
                    isActive ? "border-t-4 border-green-600 text-green-600" : ""
                  } hover:text-green-600 hover:border-t-4 hover:border-t-green-600 transition duration-200 ease-in-out`}
                >
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center gap-1 w-full md:w-auto"
                      >
                        {item.label}
                        {openDropdown === item.label ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      <ul
                        className={`transition-all duration-300 origin-top md:absolute md:top-full md:left-0 md:bg-green-400 md:shadow-md md:min-w-[200px] z-10 md:group-hover:scale-y-100 md:group-hover:opacity-100 md:group-hover:pointer-events-auto transform md:scale-y-0 md:opacity-0 md:pointer-events-none
                        ${openDropdown === item.label ? "block" : "hidden"} md:block`}
                        >

                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className="block px-4 py-3 text-sm hover:bg-green-100 md:hover:text-white md:text-white md:hover:bg-green-600 md:border-none"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
