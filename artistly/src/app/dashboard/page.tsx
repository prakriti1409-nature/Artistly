"use client";

import { useState } from "react";

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

  return (
    <div className="max-w-5xl mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-6">Artist Submissions</h1>
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Name</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Category</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Location</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Fee Range</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {artists.map((artist, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{artist.name}</td>
                <td className="px-6 py-4">{artist.category}</td>
                <td className="px-6 py-4">{artist.location}</td>
                <td className="px-6 py-4">{artist.feeRange}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => setArtists(artists.filter((_, i) => i !== index))}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {artists.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-gray-500 py-6">
                  No submissions available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
