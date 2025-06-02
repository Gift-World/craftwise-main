import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed z-50 w-full bg-white shadow-lg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between md:h-16">
          <div className="">
            <Link to="/">
              <img
                src="/images/logo1.avif"
                alt="logo"
                className="-ml-5 -mt-5 h-36 w-auto object-contain md:-ml-14 md:-mt-6 md:w-56"
              />
            </Link>
          </div>

          <div className="md:hidden">
            {isMenuOpen ? (
              <X
                className="cursor-pointer"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            ) : (
              <Menu
                className="cursor-pointer"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            )}
          </div>

          <div className="hidden space-x-8 md:flex">
            <Link
              to="/"
              className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
            >
              Home
            </Link>
            <Link
              to="/benefits"
              className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
            >
              Benefits
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
            >
              Programmes
            </Link>
            <Link
              to="/talent"
              className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
            >
              Talent Bridge
            </Link>
            <Link
              to="/blogs"
              className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
            >
              News & Insights
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
            >
              Contact
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-16 flex h-[calc(100vh-4rem)] flex-col items-center justify-center md:hidden">
            <div className="-mt-16 flex flex-col gap-y-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Home
              </Link>

              <Link
                to="/benefits"
                className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Benefits
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Programmes
              </Link>
              <Link
                to="/talent"
                className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Talent Bridge
              </Link>
              <Link
                to="/blogs"
                className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                News & Insights
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-1 pt-1 font-montserrat text-[15px] font-medium text-gray-700 transition-colors hover:text-orange-500 focus:outline-none"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
