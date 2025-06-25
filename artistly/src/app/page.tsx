// src/app/page.tsx
'use client';

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const categories = [
    { name: "Singers", image: "/images/a1.jpg", link: "/artists/singers" },
    { name: "Dancers", image: "/images/b.jpg", link: "/artists/dancers" },
    { name: "DJs", image: "/images/c.jpg", link: "/artists/djs" },
    { name: "Speakers", image: "/images/d.jpg", link: "/artists/speakers" },
  ];

  return (
    // Main container with full screen height and background image
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      // Using a.jpg as background for demonstration. Consider a dedicated background image for production.
      style={{ backgroundImage: "url('/images/j.jpg')" }}
    >
      {/* Overlay for text and cards to ensure readability */}
      <div className="flex flex-col items-center p-8 bg-black bg-opacity-50 rounded-xl shadow-2xl mx-4 sm:mx-auto max-w-4xl text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight font-sans">
          Discover Exceptional Talent
        </h1>

        {/* Sub-heading/Description */}
        <p className="text-lg sm:text-xl text-gray-200 mb-12 max-w-2xl font-serif">
          From soulful singers to inspiring speakers, find the perfect artist to elevate your next event.
          Book top performing artists with ease and confidence.
        </p>

        {/* Categories Grid - Adjusted for better spacing and background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-white bg-opacity-90 rounded-xl shadow-lg">
          {categories.map((item) => (
            <Link key={item.name} href={item.link} passHref> {/* Added passHref for better A11y */}
              {/* Card for each category */}
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 transform-gpu cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300} // Keep specific dimensions for good control
                  height={300}
                  className="rounded-md object-cover border-2 border-purple-300" // Added a subtle border
                />
                <h3 className="mt-4 text-xl font-bold text-purple-800 font-sans">{item.name}</h3>
                {/* Optional: You can add descriptions here if you want them on the cards */}
                {/* <p className="mt-1 text-sm text-gray-600 font-serif">{item.description}</p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}