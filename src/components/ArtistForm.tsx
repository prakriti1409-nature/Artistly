'use client';

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  categories: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  image: yup.mixed().notRequired(),
});

const categoriesList = ["Singer", "Dancer", "DJ", "Speaker"];
const languagesList = ["English", "Hindi", "Punjabi", "Tamil"];

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      feeRange: "",
      location: "",
      image: null,
    },
  });

  const [submittedData, setSubmittedData] = useState<any>(null);

  const onSubmit = (data: any) => {
    console.log("Submitted:", data);
    setSubmittedData(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block font-semibold">Artist Name</label>
        <input
          {...register("name")}
          className="mt-1 block w-full border rounded px-3 py-2"
        />
        <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
      </div>

      {/* Bio */}
      <div>
        <label className="block font-semibold">Bio</label>
        <textarea
          {...register("bio")}
          rows={4}
          className="mt-1 block w-full border rounded px-3 py-2"
        />
        <p className="text-red-500 text-sm mt-1">{errors.bio?.message}</p>
      </div>

      {/* Category */}
      <div>
        <label className="block font-semibold">Categories</label>
        <div className="flex flex-wrap gap-4 mt-2">
          {categoriesList.map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input type="checkbox" value={cat} {...register("categories")} />
              {cat}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.categories?.message}</p>
      </div>

      {/* Languages */}
      <div>
        <label className="block font-semibold">Languages Spoken</label>
        <div className="flex flex-wrap gap-4 mt-2">
          {languagesList.map((lang) => (
            <label key={lang} className="flex items-center gap-2">
              <input type="checkbox" value={lang} {...register("languages")} />
              {lang}
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.languages?.message}</p>
      </div>

      {/* Fee Range */}
      <div>
        <label className="block font-semibold">Fee Range</label>
        <select {...register("feeRange")} className="block w-full border rounded px-3 py-2 mt-1">
          <option value="">Select fee range</option>
          <option value="Below ₹10,000">Below ₹10,000</option>
          <option value="₹10,000 - ₹50,000">₹10,000 - ₹50,000</option>
          <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
          <option value="Above ₹1,00,000">Above ₹1,00,000</option>
        </select>
        <p className="text-red-500 text-sm mt-1">{errors.feeRange?.message}</p>
      </div>

      {/* Location */}
      <div>
        <label className="block font-semibold">Location</label>
        <input
          {...register("location")}
          className="mt-1 block w-full border rounded px-3 py-2"
        />
        <p className="text-red-500 text-sm mt-1">{errors.location?.message}</p>
      </div>

      {/* Image Upload */}
      <div>
        <label className="block font-semibold">Profile Image (Optional)</label>
        <input type="file" {...register("image")} />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
      >
        Submit
      </button>

      {/* Debug Preview */}
      {submittedData && (
        <div className="mt-6 p-4 bg-green-50 border border-green-300 rounded text-sm">
          <h4 className="font-semibold text-green-800 mb-2">Submitted Data:</h4>
          <pre className="whitespace-pre-wrap">{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </form>
  );
}
