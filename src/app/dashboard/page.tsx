"use client";

import { useState } from "react";
import Table from "@/components/Table";

type Artist = {
  name: string;
  category: string;
  location: string;
  feeRange: string;
};

const dummyArtists: Artist[] = [
  { name: "Asha", category: "Singer", location: "Delhi", feeRange: "₹25,000 - ₹50,000" },
  { name: "Karan", category: "DJ", location: "Mumbai", feeRange: "₹50,000+" },
  { name: "Rhea", category: "Dancer", location: "Bangalore", feeRange: "₹10,000 - ₹25,000" },
];

export default function DashboardPage() {
  const [artists, setArtists] = useState<Artist[]>(dummyArtists);

  const handleRemove = (index: number) => {
    setArtists((prev) => prev.filter((_, i) => i !== index));
  };

  const columns = [
    { header: "Name", accessor: "name" as keyof Artist },
    { header: "Category", accessor: "category" as keyof Artist },
    { header: "Location", accessor: "location" as keyof Artist },
    { header: "Fee Range", accessor: "feeRange" as keyof Artist },
    {
      header: "Actions",
      render: (_: Artist, index: number) => (
        <button
          onClick={() => handleRemove(index)}
          className="text-red-600 hover:underline"
        >
          Remove
        </button>
      ),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-6">Artist Submissions</h1>
      <Table data={artists} columns={columns} />
    </div>
  );
}
