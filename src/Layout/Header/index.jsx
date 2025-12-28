import { useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import brandLogo from "../../../src/assets/logo.png";
import LogInModal from "../../Pages/LogInModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogInModal, setShowLoginModal] = useState(false);

  const handleLoginForm = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  // Function to toggle the menu's state.
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onClickLogin = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 py-3 shadow-lg">
      <div className="mx-auto max-w-[95%] container flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-white">
          <a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <img className="w-[50px] h-[50px]" src={brandLogo} alt="" />
          </a>
        </div>

        {/* Desktop Navigation Menu */}
        {/* Hidden on small screens ('hidden md:flex') and displayed as a row on medium and up */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </a>
          <button
            className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            onClick={handleLoginForm}
          >
            <AiOutlineLogin />
          </button>
        </nav>

        {/* Mobile Menu Toggle Button (Hamburger) */}
        {/* Only visible on screens smaller than 'md' breakpoint */}
        <button
          onClick={toggleMenu} // onClick event handler calls the toggleMenu function
          className="md:hidden text-white focus:outline-none text-3xl"
        >
          {/* SVG for the hamburger icon */}
          {!isOpen ? <IoMenu /> : <IoMdClose />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {/* Conditionally rendered based on the 'isOpen' state.
          The 'hidden' class is added or removed using a ternary operator. */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-700 mt-4 rounded-lg shadow-inner`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          <a
            href="#"
            className="block text-white hover:bg-gray-600 p-2 rounded-md transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white hover:bg-gray-600 p-2 rounded-md transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="block text-white hover:bg-gray-600 p-2 rounded-md transition-colors duration-300"
          >
            Contact
          </a>
          <button
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors duration-300 mt-2"
            onClick={onClickLogin}
          >
            Sign In
          </button>
        </nav>
      </div>
      {showLogInModal && <LogInModal onClose={handleCloseModal} />}
    </header>
  );
};

export default Header;
