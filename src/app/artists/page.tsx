// src/app/artists/page.tsx
"use client";

import { useState } from "react";
import ArtistCard from "@/components/ArtistCard";
import FilterBlock from "@/components/FilterBlock";
import artistData from "@/data/artists.json";

export default function ArtistListing() {
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("");

  const filtered = artistData.filter((artist) => {
    const matchCategory = category === "All" || artist.category === category;
    const matchLocation = location === "" || artist.location.toLowerCase().includes(location.toLowerCase());
    return matchCategory && matchLocation;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Browse Artists</h1>
      <FilterBlock
        category={category}
        setCategory={setCategory}
        location={location}
        setLocation={setLocation}
      />
      <div className="grid gap-4 mt-4">
        {filtered.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    </div>
  );
}
