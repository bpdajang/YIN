import React, { useState, useEffect } from "react";
import logo from "../../Assets/YINlogo.png";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/me`,
          {
            credentials: "include",
          },
        );
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (err) {
        // Not authenticated
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      window.location.href = "/";
    } catch (err) {
      console.error("Logout failed");
    }
  };

  return (
    <div className="container h-24 pt-5 sticky top-0 z-50 mr-0 ml-0 bg-base-100 w-screen opacity-90">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              href="/"
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li className="group relative">
                <a className="btn-ghost inline-block hover:bg-green-300 group-hover:bg-green-300">
                  About
                </a>
                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-10 w-52 p-2 shadow absolute top-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/our-team">Our People</a>
                  </li>
                </ul>
              </li>
              <li className="group relative">
                <a
                  href="/programs"
                  className="btn-ghost inline-block hover:bg-green-300 group-hover:bg-green-300"
                >
                  Programs
                </a>
                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-10 w-64 p-2 shadow absolute top-5 -right-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <li>
                    <a href="/programs#leadership">
                      Leadership and Time Management
                    </a>
                  </li>
                  <li>
                    <a href="/programs#Career">Career Guidance</a>
                  </li>
                  <li>
                    <a href="/programs#CoverLetter">
                      Cover Letter and CV Writing
                    </a>
                  </li>
                  <li>
                    <a href="/programs#MentalHealth">Mental Health Awareness</a>
                  </li>
                  <li>
                    <a href="/programs#PhysicalHealth">
                      Physical Health and Wellness
                    </a>
                  </li>
                  <li>
                    <a href="/programs#SkillDevelopment">
                      Skill Development Workshops
                    </a>
                  </li>
                  <li>
                    <a href="/programs#CommunityService">
                      Community Service Projects
                    </a>
                  </li>
                  <li>
                    <a href="/programs#Networking">Networking Events</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/resources" hrefLang="/">
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="/Gallery"
                  className="btn-ghost inline-block hover:bg-green-300"
                >
                  Gallery
                </a>
              </li>
              {user && (
                <li>
                  <a
                    href="/admin"
                    className="btn-ghost inline-block hover:bg-green-300"
                  >
                    Management
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="logo mt-0 w-52 flex ">
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="btn btn-ghost text-xl inline-block w-36 h-28 absolute -top-4 hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal space-x-2 mr-20 lg:space-x-10 px-1">
            <li>
              <a href="/" className="btn-ghost inline-block hover:bg-green-300">
                Home
              </a>
            </li>
            <li className="group relative">
              <a className="btn-ghost inline-block hover:bg-green-300 group-hover:bg-green-300">
                About
              </a>
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-10 w-52 p-2 shadow absolute top-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/our-team">Our People</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </li>
            <li className="group relative">
              <a
                href="/programs"
                className="btn-ghost inline-block hover:bg-green-300 group-hover:bg-green-300"
              >
                Programs
              </a>
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-10 w-64 p-2 shadow absolute top-5 -right-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li>
                  <a href="/programs#leadership">
                    Leadership and Time Management
                  </a>
                </li>
                <li>
                  <a href="/programs#Career">Career Guidance</a>
                </li>
                <li>
                  <a href="/programs#CoverLetter">
                    Cover Letter and CV Writing
                  </a>
                </li>
                <li>
                  <a href="/programs#MentalHealth">Mental Health Awareness</a>
                </li>
                <li>
                  <a href="/programs#PhysicalHealth">
                    Physical Health and Wellness
                  </a>
                </li>
                <li>
                  <a href="/programs#SkillDevelopment">
                    Skill Development Workshops
                  </a>
                </li>
                <li>
                  <a href="/programs#CommunityService">
                    Community Service Projects
                  </a>
                </li>
                <li>
                  <a href="/programs#Networking">Networking Events</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/resources"
                className="btn-ghost inline-block hover:bg-green-300"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="/Gallery"
                className="btn-ghost inline-block hover:bg-green-300"
              >
                Gallery
              </a>
            </li>
            {user && (
              <li>
                <a
                  href="/admin"
                  className="btn-ghost inline-block hover:bg-green-300"
                >
                  Management
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogout}
              href="/home"
              className="btn btn-ghost text-red-500 hover:bg-red-100"
            >
              Logout
            </button>
          ) : (
            <a href="/login" className="btn btn-ghost hover:bg-blue-100">
              Admin Login
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
