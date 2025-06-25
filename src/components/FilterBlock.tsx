// src/components/FilterBlock.tsx
interface Props {
  category: string;
  setCategory: (val: string) => void;
  location: string;
  setLocation: (val: string) => void;
}

export default function FilterBlock({ category, setCategory, location, setLocation }: Props) {
  return (
    <div className="flex gap-4 flex-wrap">
      <select
        className="border px-2 py-1"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Speaker">Speaker</option>
      </select>

      <input
        type="text"
        className="border px-2 py-1"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
}
