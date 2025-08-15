"use client";

import Image from "next/image";
import hero1 from "@/public/hero1.png"; // apna test image

export default function TestSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-900 text-white p-8">
      <div className="flex gap-8 items-center justify-center">
        {/* Left Text */}
        <div className="max-w-xs text-center">
          <h2 className="text-2xl font-bold mb-2">Left Text</h2>
          <p className="text-gray-300">
            Ye test section hai taake hum production me check karein layout sahi load ho raha hai ya nahi.
          </p>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 border border-white rounded-lg overflow-hidden">
          <Image
            src={hero1}
            alt="Test Image"
            width={400}
            height={300}
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Right Text */}
        <div className="max-w-xs text-center">
          <h2 className="text-2xl font-bold mb-2">Right Text</h2>
          <p className="text-gray-300">
            Agar yeh section sahi dikh raha hai to problem HeroCarousel ka image handling logic me hai.
          </p>
        </div>
      </div>
    </section>
  );
}
