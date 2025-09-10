import { useState } from "react";
import Logo from "../../src/assets/IEEE_PES_Logo.png";
import College_Logo from "../../src/assets/SSN_Logo.png";
import { Turn } from "hamburger-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-0 z-20 w-full">
      <div
        className={`desktop-bar flex h-20 w-full items-center justify-between gap-x-2 bg-dark-green px-2 md:h-24 md:px-10 md:pt-4`}
      >
        <div className="logo-title flex items-center gap-x-4">
          <img
            src={Logo}
            className="max-h-16 max-w-16 md:max-h-28 md:max-w-28 lg:-mt-4 lg:max-h-32 lg:max-w-32"
          />
          <div className=" hidden xl:flex gap-x-2">
            <h1 className=" lg:text-2xl text-office-green font-bold">IEEE</h1>
            <h1 className=" lg:text-2xl text-mindaro font-bold">
              Power and Energy Society
            </h1>
          </div>
        </div>
        <div className="navlink flex items-center gap-x-4 md:gap-x-12  lg:gap-x-24 ">
          <ul className="lg:flex hidden text-lg gap-x-6 text-white hover:cursor-pointer">
            <Link to="/">
              <li className="hover:text-mindaro duration-200">Home</li>
            </Link>

            <li>|</li>
            <Link to="/events">
              <li className="hover:text-mindaro duration-200">Events</li>
            </Link>
            <li>|</li>

            <Link to="/team">
              <li className="hover:text-mindaro duration-200">Team</li>
            </Link>
            <li>|</li>
            <Link to="/contact">
              <li className="hover:text-mindaro duration-200">Contact</li>
            </Link>
          </ul>
          <img
            src={College_Logo}
            className="max-h-12 max-w-12 md:max-h-28 md:max-w-28"
          />
          <div className=" lg:hidden">
            <Turn toggled={isOpen} toggle={setIsOpen} color="#FFFFFF" />
          </div>
        </div>
      </div>

      <div
        className={`
          fixed top-20 md:top-24 left-0 w-full bg-dark-green border-t border-office-green/20 lg:hidden
          transition-all duration-300 ease-in-out z-10
          ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }
        `}
      >
        <div className="px-6 py-4">
          <ul className="flex flex-col text-white">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <li
                className="hover:text-mindaro cursor-pointer  font-medium
                           transform hover:translate-x-2 transition-all duration-200 
                           py-4 border-b border-office-green/15"
              >
                Home
              </li>
            </Link>
            <Link to="/events" onClick={() => setIsOpen(false)}>
              <li
                className="hover:text-mindaro cursor-pointer  font-medium
                           transform hover:translate-x-2 transition-all duration-200
                           py-4 border-b border-office-green/15"
              >
                Events
              </li>
            </Link>
            <Link to="/team" onClick={() => setIsOpen(false)}>
              <li
                className="hover:text-mindaro cursor-pointer  font-medium
                           transform hover:translate-x-2 transition-all duration-200
                           py-4 border-b border-office-green/15"
              >
                Team
              </li>
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <li
                className="hover:text-mindaro cursor-pointer  font-medium
                           transform hover:translate-x-2 transition-all duration-200
                           py-4 border-b border-office-green/15"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
