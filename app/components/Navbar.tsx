"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import GetStartedForm from "./GetQuoteForm";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
    setMenuOpen(false); // Close mobile menu when form opens
  };
  const pathname = usePathname();
  const router = useRouter();

  const menu = [
    { name: "Home", type: "page", path: "/" },
    { name: "About Us", type: "section", id: "aboutus" },
    { name: "Testimonial", type: "section", id: "testimonial" },
    { name: "Portfolio", type: "section", id: "portfolio" },
    { name: "Blog", type: "section", id: "blog" },
    { name: "Contact", type: "page", path: "/contact" },
  ];

  const handleClick = (e: any, item: any) => {
    if (item.type === "section" && pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false); // Close mobile menu when a link is clicked
  };

  return (
    <div className="w-full bg-gradient1 shadow-lg p-0 sticky top-0 z-50">
      {/* Mobile Header (visible only on mobile) */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-primary2">
        <Link href="/" className="relative h-16 w-16">
          <Image
            src="/appmashLogo.png"
            alt="Logo"
            fill
            className="object-contain p-1"
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-secondary1 w-4 h-4 mr-2"
            />
            <span className="text-sm text-white">+123 456 7890</span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>

      {/* Desktop Header (hidden on mobile) */}
      <div className="hidden md:flex w-full h-20 mr-14">
        {/* Logo Section */}
        <div className="w-48 flex justify-center items-center px-5">
          <Link href="/" className="relative h-16 w-[140px] cursor-pointer">
            <Image
              src="/appmashLogo.png"
              alt="Logo"
              fill
              className="object-contain p-1"
            />
          </Link>
        </div>

        {/* Navbar Section */}
        <nav className="flex-1 bg-primary2 text-secondary1 rounded-tl-3xl flex items-center">
          <div className="w-full max-w-[1300px] mx-auto px-12 md:px-12 lg:px-8">
            <div className="flex items-center justify-between w-full h-20">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-10">
                {menu.map((item) =>
                  item.type === "section" || item.path ? (
                    <Link
                      key={item.name}
                      href={
                        item.type === "section" ? `/#${item.id}` : item.path!
                      }
                      scroll={item.type === "section" ? false : true}
                      onClick={(e) => handleClick(e, item)}
                      className="hover:text-gray-200 transition"
                    >
                      {item.name}
                    </Link>
                  ) : null
                )}
              </div>

              {/* Contact & CTA Desktop */}
              <div className="hidden md:flex items-center space-x-6">
                {/* Talk with Us + Number */}
                <div className="flex flex-col items-end text-right">
                  <span className="text-black text-md font-semibold mb-1">
                    Talk with Us
                  </span>
                  <div className="flex items-center justify-end w-full">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-secondary1 w-5 h-5 mr-2"
                    />
                    <span className="text-md text-white">+123 456 7890</span>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={handleButtonClick}
                  className="bg-red-800 shadow-2xl text-secondary1 px-5 py-3 rounded-md transition"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient1 text-secondary1">
          <div className="px-6 py-4 space-y-4">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={
                  item.type === "section" ? `/#${item.id}` : item.path || "/"
                }
                scroll={item.type === "section" ? false : true}
                onClick={(e) => handleClick(e, item)}
                className="block text-lg font-medium hover:text-gray-300 transition py-2 border-b border-gray-700"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Mobile */}
            <div className="mt-6">
              <button
                onClick={handleButtonClick}
                className="bg-red-800 hover:bg-red-700 text-secondary1 px-6 py-3 rounded-lg w-full text-center transition transform hover:scale-105 text-lg font-semibold"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal (shared by both mobile and desktop) */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-4">
          {/* Main Form Container */}
          <div
            className="relative w-full max-w-2xl bg-secondary1 rounded-xl shadow-2xl overflow-y-auto"
            style={{ maxHeight: "95vh" }}
          >
            {/* Extra Large Red Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 z-10 cursor-pointer text-primary1 hover:text-primary2 text-6xl font-bold transition-colors duration-200 focus:outline-none"
              style={{ width: "60px", height: "60px", lineHeight: "60px" }}
              aria-label="Close form"
            >
              &times;
            </button>

            {/* Form Content */}
            <div className="p-6 md:p-8 w-full">
              <GetStartedForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;