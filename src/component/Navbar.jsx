import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login error", err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setDropdownOpen(false);
    } catch (err) {
      console.error("Logout error", err);
    }
  };

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Founder", to: "/founder" },
    { name: "Member", to: "/team" },
    { name: "Idea", to: "/idea" },
    { name: "Event", to: "/event" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <nav className="bg-white/60 backdrop-blur-md fixed top-0 right-0 left-0 text-black px-6 shadow-md z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <NavLink to="/" className="flex items-center space-x-2">
            <img className="w-18" src="/logo.png" alt="E-cell Logo" />
            <h1 className="text-xl capitalize font-bold cursor-pointer">
              E-cell HIT haldia
            </h1>
          </NavLink>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-500 text-xl font-extrabold font-[Orbitron]"
                    : "text-black font-medium hover:text-blue-500 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* 🔥 Google Login/Logout/Profile */}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <img
                  src={user.photoURL}
                  alt="profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md py-2 z-50">
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={login}
                className="ml-4 px-4 py-1 bg-blue-400 text-black rounded hover:bg-blue-500 transition"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu open button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 font-semibold"
                  : "text-white hover:text-blue-400"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Login/Logout */}
          {user ? (
            <>
              <div className="flex items-center gap-2 mt-4">
                <img
                  src={user.photoURL}
                  alt="profile"
                  className="w-10 h-10 rounded-full"
                />
                <span>{user.displayName}</span>
              </div>
              <button
                onClick={logout}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                login();
                setIsOpen(false);
              }}
              className="mt-4 px-4 py-2 bg-blue-400 text-black rounded hover:bg-blue-500 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-5"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
