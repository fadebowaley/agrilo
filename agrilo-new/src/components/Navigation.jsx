import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

// Internal route structure
const menuItems = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT US",
    children: [
      { label: "About us", href: "/about" },
      { label: "The Leadership", href: "/team" },
      { label: "Our Team", href: "/teamMembers" },
    ],
  },
  {
    label: "OUR SERVICES",
    children: [
      { label: "What we Offer", href: "/services" },
      { label: "Investment", href: "/investment" },
    ],
  },
  {
    label: "NEWS AND MEDIA",
    children: [{ label: "Blogs", href: "/blogs" }],
  },
  { label: "CONTACT US", href: "/Contact" },
  { label: "BOOK CONSULTATION", href: "/book" },
];

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="w-full bg-white shadow-md overflow-visible">
      {/* Top Bar */}
      <div className="bg-[#f5f5f5] text-sm text-gray-700 px-10">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          <span className="text-lg font-semibold italic text-gray-600">........Growing the Economy</span>
          <div className="flex gap-4 md:gap-6 items-center">
            <Facebook className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Logo and Contact */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-3 px-10 gap-6 md:mb-3">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src="/logo.png" alt="Logo" className="h-12" />
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-gray-700">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex flex-col sm:flex-row items-center gap-12 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <Phone className="text-green-600 w-12 h-12" />
            <div>
              <a href="tel:+2348129460848" className="font-medium text-black hover:text-green-600">
                +234 812 946 0848
              </a>
              <p className="text-gray-500">Mon-Fri, 7:00am - 5.00pm</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="text-green-600 w-10 h-10" />
            <div>
              <a href="mailto:info@jmsfagribusiness.com" className="font-medium text-black hover:text-green-600">
                info@jmsfagribusiness.com
              </a>
              <p className="text-gray-500">Mail Us</p>
            </div>
          </div>
        </div>

        <div>
          <Link
            to="/Contact"
            className="hidden md:flex gap-2 items-center justify-center bg-green-600 text-white font-semibold px-5 py-3 rounded-full text-sm border border-transparent hover:text-green-700 hover:bg-white hover:border-green-600 transition-colors duration-300"
          >
            Contact us
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white shadow-md border-y border-gray-300">
        <nav>
        <div className="container mx-auto px-4">
          <ul
            className={`flex flex-col md:flex-row md:items-center md:justify-center text-sm font-semibold text-black ${
              isMobileMenuOpen ? "block bg-green-50 px-4 rounded-b-lg shadow-md" : "hidden"
            } md:flex gap-2 md:gap-0`}
          >
            {menuItems.map((item) => {
              const isActive = item.href && location.pathname === item.href;

              return (
                <li
                  key={item.label}
                  className={`relative group ${
                    isMobileMenuOpen
                      ? "border-b border-gray-200 py-3 hover:text-green-500"
                      : "md:border-l md:border-r border-gray-200 md:px-6 py-2 md:py-4"
                  } ${
                    isActive ? "border-t-4 border-t-green-600 text-green-600" : ""
                  } hover:border-t-green-600 hover:text-green-600 transition duration-400 ease-in-out`}
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
                        className={`transition-all duration-300 origin-top md:absolute md:top-full md:left-0 md:bg-green-400 md:shadow-md md:min-w-[200px] z-10 md:group-hover:scale-y-100 md:group-hover:opacity-100 md:group-hover:pointer-events-auto transform md:scale-y-0 md:opacity-0 md:pointer-events-none ${
                          openDropdown === item.label ? "block" : "hidden"
                        } md:block`}
                      >
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.href}
                              className="block px-4 py-3 text-sm hover:bg-green-100 md:hover:text-white md:text-white md:hover:bg-green-600"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link to={item.href}>{item.label}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      </div>
      
    </header>
  );
};

export default Navigation;
