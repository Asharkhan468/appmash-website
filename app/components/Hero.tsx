"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import pintrest from "@/public/Pintrest Icon.png";
import facebook from "@/public/facebook Icon.png";
import twitter from "@/public/Twitter Icon.png";
import youtube from "@/public/Youtube Icon.png";
import hero1 from "@/public/hero1.png";
import hero2 from "@/public/hero2.png";
import hero3 from "@/public/hero3.png";
// import GetStartedForm from "./GetQuoteForm";

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
}

const slides: Slide[] = [
  {
    title: "CUSTOM SOFTWARE",
    subtitle: "SOLUTION",
    description:
      "We develop tailored solutions that scale with your business growth.",
    image: hero1,
  },
  {
    title: "BRAND IDENTITY",
    subtitle: "INNOVATION",
    description:
      "Cross-platform mobile apps that perform smoothly and look great.",
    image: hero3,
  },
  {
    title: "AI-DRIVEN MARKETING",
    subtitle: "EXPERIENCE",
    description: "From design to deployment, we deliver modern, scalable apps.",
    image: hero2,
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, description, image } = slides[index];

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black pt-6 pb-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary2/40 via-black to-primary2/20 z-0" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left space-y-4 order-2 md:order-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
              Welcome Creative Agency
            </p>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              {title}
              <br />
              {subtitle}
            </h1>
            <p className="text-base text-gray-300 max-w-md mx-auto md:mx-0">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-primary2 text-white font-semibold px-4 py-2 rounded-md hover:bg-primary2/90"
              >
                Get Started
                {/* <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" /> */}
              </button>
              <button className="group flex items-center gap-2 border border-white hover:bg-white hover:text-black text-white font-semibold px-4 py-2 rounded-md">
                {/* <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="w-4 h-4 text-white group-hover:text-black"
                /> */}
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="relative flex justify-center items-center order-1 md:order-2 w-full">
            <div className="relative w-[440px] h-[550px] min-w-[300px] flex justify-center items-center">
              <Image
                src={image}
                alt={`${title} ${subtitle}`}
                width={440}
                height={550}
                priority
                className="object-contain rounded-md"
              />
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex absolute right-[-40px] lg:right-[-60px] top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
              {[pintrest, facebook, twitter, youtube].map((icon, i) => (
                <Image
                  key={i}
                  src={icon}
                  alt="Social"
                  width={24}
                  height={24}
                  className="hover:scale-110 transition-transform"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-center gap-2">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => setIndex(slideIndex)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === slideIndex
                  ? "bg-primary2 w-4"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {/* {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-4">
          <div
            className="relative w-full max-w-2xl bg-secondary1 rounded-xl shadow-2xl overflow-y-auto"
            style={{ maxHeight: "95vh" }}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-primary1 hover:text-primary2 text-6xl font-bold"
            >
              &times;
            </button>
            <div className="p-8 w-full">
              <GetStartedForm />
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
}
