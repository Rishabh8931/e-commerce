import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="logo" className="w-36" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex=col items-center  gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/collections"
          className="flex flex=col items-center  gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex=col items-center  gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex=col items-center  gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden" />
        </NavLink>
      </ul>

      {/** search_icon, profile_icon, and cart_icon */}
      <div className="flex items-center gap-5 ">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-4 h-4 cursor-pointer"
        />

        <div className="relative" ref={profileMenuRef}>
          <button
            type="button"
            aria-label="Open profile menu"
            aria-expanded={isProfileMenuOpen}
            aria-haspopup="menu"
            onClick={() => setIsProfileMenuOpen((isOpen) => !isOpen)}
            className="flex items-center"
          >
            <img
              src={assets.profile_icon}
              alt=""
              className="w-4 cursor-pointer"
            />
          </button>

          <div
            role="menu"
            aria-hidden={!isProfileMenuOpen}
            className={`absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ${
              isProfileMenuOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="#"
              role="menuitem"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              My Profile
            </a>
            <a
              href="#"
              role="menuitem"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Orders
            </a>
            <a
              href="#"
              role="menuitem"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign out
            </a>
          </div>
        </div>

        <Link to="/cart" className="relative ml-0">
          <img
            src={assets.cart_icon}
            alt="cart"
            className="w-4 h-4 cursor-pointer"
          />
          <p className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
            10
          </p>
        </Link>

        {/** Hamburger menu for mobile view */}
        <img
          onClick={() => setVisible(!visible)}
          src={assets.menu_icon}
          alt="hamburger"
          className="w-4 h-4 cursor-pointer sm:hidden"
        />
      </div>
      {/** sidebar menu with dynamic className */}

      <div
        className={`absolute top-0 right-0 h-full overflow-hidden bg-white shadow-lg ${visible ? "w-full" : "w-0"} transition-all duration-300 ease-in-out`}
      >
        {/** close icon */}
        <div className="flex flex-col ">
          <div
            onClick={() => setVisible(!visible)}
            className="flex items-center gap-3 cursor-pointer p-2"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          {/** Sidebar content */}

          <NavLink
            onClick={() => setVisible(!visible)}
            to="/"
            className=" py-2 pl-6 border"
          >
            <p>HOME</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(!visible)}
            to="/about"
            className=" py-2 pl-6 border"
          >
            <p>ABOUT</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(!visible)}
            to="/collections"
            className=" py-2 pl-6 border"
          >
            <p>COLLECTION</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(!visible)}
            to="/contact"
            className=" py-2 pl-6 border"
          >
            <p>CONTACT</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
