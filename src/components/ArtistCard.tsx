// src/components/ArtistCard.tsx
interface Artist {
  name: string;
  category: string;
  location: string;
  fee: string;
}

export default function ArtistCard({ artist }: { artist: Artist }) {
  const handleQuoteClick = () => {
    alert(`You asked for a quote for ${artist.name}`);
  };

  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="text-lg font-bold">{artist.name}</h3>
      <p>{artist.category}</p>
      <p>{artist.location}</p>
      <p className="font-semibold">{artist.fee}</p>
      <button
        onClick={handleQuoteClick}
        className="mt-2 px-3 py-1 border rounded hover:bg-purple-100 transition"
      >
        Ask for Quote
      </button>
    </div>
  );
}
