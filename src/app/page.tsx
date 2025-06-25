'use client';

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const categories = [
    { name: "Singers", image: "/images/a.jpg", overlay: "/images/a1.jpg", link: "/artists" },
    { name: "Dancers", image: "/images/a.jpg", overlay: "/images/b.jpg", link: "/artists" },
    { name: "DJs", image: "/images/a.jpg", overlay: "/images/c.jpg", link: "/artists" },
    { name: "Speakers", image: "/images/a.jpg", overlay: "/images/d.jpg", link: "/artists" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate bg-purple-900 py-32 sm:py-40 lg:py-48 text-white text-center px-4">
        <div className="max-w-2xl mx-auto z-10 relative">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Discover Exceptional Talent
          </h1>
          <h3 className="mt-6 text-lg sm:text-xl font-medium text-gray-300">
            In every corner of this country, voices rise, feet move in rhythm, ideas spark in silence — all waiting to be heard, seen, and celebrated...
          </h3>
          <h4 className="mt-6 text-base sm:text-lg">
            From singers to speakers, find the perfect artist to elevate your next event.
          </h4>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/artists"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-purple-700 hover:bg-purple-100 transition"
            >
              Explore Artists →
            </Link>
            <Link
              href="/onboard"
              className="rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-purple-700 transition"
            >
              Become an Artist →
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <Link key={item.name} href={item.link}>
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                
                {/* Layered Image for All Categories */}
                <div className="relative w-[300px] h-[300px]">
                  <Image
                    src={item.image}
                    alt={`${item.name} Background`}
                    fill
                    className="rounded-md object-cover border-2 border-purple-300 opacity-80"
                    style={{ zIndex: 1 }}
                  />
                  <Image
                    src={item.overlay}
                    alt={`${item.name} Overlay`}
                    fill
                    className="rounded-md object-cover border-2 border-purple-500"
                    style={{
                      zIndex: 2,
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                    }}
                  />
                </div>

                <h3 className="mt-4 text-xl font-bold text-purple-800">{item.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © 2025 All rights reserved.
      </footer>
    </div>
  );
}
