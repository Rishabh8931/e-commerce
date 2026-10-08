import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="relative left-1/2 mt-16 w-screen -translate-x-1/2 bg-black px-6 py-12 text-white sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <img
            src={assets.logo}   
            alt="Forever"
            className="mb-5 w-32 brightness-0 invert"
          />
          <p className="max-w-md text-sm leading-6 text-gray-300">
            Discover timeless fashion and quality essentials made for every
            occasion. Shop our latest collections and find something you love.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider">
            Quick links
          </h2>
          <nav className="flex flex-col gap-3 text-sm text-gray-300">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <Link to="/collectiona" className="transition hover:text-white">
              Collections
            </Link>
            <Link to="/about" className="transition hover:text-white">
              About us
            </Link>
            <Link to="/contact" className="transition hover:text-white">
              Contact us
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider">
            Get in touch
          </h2>
          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <a href="tel:+18001234567" className="transition hover:text-white">
              +1 800 123 4567
            </a>
            <a
              href="mailto:support@forever.com"
              className="transition hover:text-white"
            >
              support@forever.com
            </a>
            <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Forever. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
