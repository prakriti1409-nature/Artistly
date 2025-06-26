'use client';

import ArtistForm from "@/components/ArtistForm";

export default function OnboardPage() {
  const handleSuccess = () => {
    alert("🎉 Artist successfully submitted!");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-purple-700 text-center">
        Artist Onboarding
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Submit details of your artist to get listed on Artistly.
      </p>
      <ArtistForm onSuccess={handleSuccess} />
    </div>
  );
}
