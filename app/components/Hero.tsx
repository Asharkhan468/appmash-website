"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

import pintrest from "@/public/Pintrest Icon.png";
import facebook from "@/public/facebook Icon.png";
import twitter from "@/public/Twitter Icon.png";
import youtube from "@/public/Youtube Icon.png";
import hero1 from "@/public/hero1.png";
import hero2 from "@/public/hero2.png";
import hero3 from "@/public/hero3.png";

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
   <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black py-12">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-primary2/40 via-black to-primary2/20 z-0" />

  {/* Main Content Container */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
      {/* Text Content - Left Side */}
      <div className="flex-1 space-y-6 lg:space-y-8 px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
          Welcome Creative Agency
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          {title}
          <br />
          {subtitle}
        </h1>
        <p className="text-lg text-gray-300 max-w-xl">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-primary2 text-white font-semibold px-6 py-3 rounded-md hover:bg-primary2/90 transition-colors"
          >
            Get Started
          </button>
          <button className="group flex items-center gap-2 border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-md transition-colors">
            Watch Video
          </button>
        </div>
      </div>

      {/* Image Content - Right Side */}
      <div className="flex-1 flex justify-center relative">
        <div className="w-full max-w-md xl:max-w-lg aspect-[3/4] relative">
          <Image
            src={image}
            alt={`${title} ${subtitle}`}
            fill
            priority
            className="object-contain rounded-lg"
          />
        </div>

        {/* Social Icons */}
        <div className="hidden lg:flex absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 flex-col gap-5 z-20">
          {[pintrest, facebook, twitter, youtube].map((icon, i) => (
            <Image
              key={i}
              src={icon}
              alt="Social"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Dot Indicators */}
  <div className="relative z-10 w-full max-w-7xl mx-auto mt-8 lg:mt-12">
    <div className="flex justify-center gap-3">
      {slides.map((_, slideIndex) => (
        <button
          key={slideIndex}
          onClick={() => setIndex(slideIndex)}
          className={`w-3 h-3 rounded-full transition-all ${
            index === slideIndex
              ? "bg-primary2 w-6"
              : "bg-white/50 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  </div>

  {/* Hidden block to prevent purge */}
  <div className="hidden">
    lg:flex-row flex-col justify-center items-center gap-12 xl:gap-16 space-y-6 lg:space-y-8
  </div>
</section>
  );
}
