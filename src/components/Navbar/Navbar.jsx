import { useState, useContext } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { MdOutlineLogin } from 'react-icons/md';
import { HiOutlineLogin } from 'react-icons/hi';
import 'animate.css';

const navUrl = (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/campaigns">Campaigns</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </li>
    <li>
      <NavLink to="/help">How It help</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#76ABAE] text-white shadow-md">
      {/* Navbar container */}
      <div className="w-11/12 2xl:w-10/12 max-w-[2500px] mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <div className="animate__animated animate__pulse animate__delay-Xs border-2 border-b-gray-600 border-r-gray-600 p-2">
          <h1 className="text-xl md:text-3xl font-extrabold text-[#31363F]">
            <NavLink to="/">
              KIND <span className="text-yellow-500">WINTER</span>
            </NavLink>
          </h1>
        </div>

        {/* Links (Desktop view) */}
        <div className="hidden lg:flex space-x-6 items-center text-black text-xl">
          <ul className="menu menu-horizontal px-1 gap-2 text-lg">{navUrl}</ul>
        </div>

        {/* User Profile or Login */}
        <div className="hidden lg:flex items-center">
          {user?.email ? (
            <div className="flex gap-2 items-center">
              <img
                className="w-12 h-12 rounded-full object-cover border-2 border-black"
                src={user.photoURL || '/default-avatar.png'}
                alt="User"
              />

              <div
                onClick={handleLogout}
                className="flex items-center btn bg-[#6B1D1D]  hover:bg-[#8B1D1D]"
              >
                <span className="text-white">
                  <MdOutlineLogin />
                </span>
                <button className="border-none text-white text-md">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <NavLink
              to="login"
              className="flex items-center btn bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="text-white text-xl">
                <HiOutlineLogin />
              </span>
              <button className="ml-2 border-none text-white text-lg font-semibold">
                Login
              </button>
            </NavLink>
          )}
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none p-2 rounded-full border"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Toggle able) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-900">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 ${
                isActive ? 'bg-teal-700 text-white' : 'hover:bg-teal-600'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/campaigns"
            className={({ isActive }) =>
              `block px-4 py-2 ${
                isActive ? 'bg-teal-700 text-white' : 'hover:bg-teal-600'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Campaigns
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 ${
                isActive ? 'bg-teal-700 text-white' : 'hover:bg-teal-600'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) =>
              `block px-4 py-2 ${
                isActive ? 'bg-teal-700 text-white' : 'hover:bg-teal-600'
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            How it help
          </NavLink>
          {user?.email ? (
            <div className="flex items-center px-4 py-2 gap-2">
              <img
                className="w-12 h-12 rounded-full object-cover border-2 border-teal-600"
                src={user.photoURL || '/default-avatar.png'}
                alt="User"
              />
              <div
                onClick={handleLogout}
                className="flex items-center btn bg-[#6B1D1D]"
              >
                <span className="text-white">
                  <MdOutlineLogin />
                </span>
                <button className="border-none text-white text-md">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
              <div className="btn bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-white flex items-center">
                  <HiOutlineLogin />
                  <button className="px-4 w-full">Login</button>
                </div>
              </div>
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
