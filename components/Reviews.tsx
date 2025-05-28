"use client";
import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Reviews({ ratings }: { ratings: any[] }) {
  const [showAll, setShowAll] = useState(false);

  const averageRating = ratings?.length
    ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
    : null;

  const displayedRatings = showAll ? ratings : ratings.slice(0, 6);

  return (
    <div className="mt-10">
      {averageRating ? (
        <div className="flex justify-center mb-8">
          <div className="px-6 py-4 rounded-xl border-2 border-gray-200 flex items-center gap-3">
            <Star className="fill-yellow-500 stroke-yellow-500" />
            <span className="text-xl font-bold">{averageRating} / 5</span>
            <span className="text-gray-600">({ratings.length} reviews)</span>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No reviews yet.</p>
      )}

      {ratings?.length > 0 && (
        <>
          {/* Desktop grid and mobile scroll */}
          <div
            className={`${
              showAll
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            } max-sm:flex max-sm:overflow-x-auto max-sm:snap-x max-sm:space-x-4 pb-4`}
          >
            {displayedRatings.map((rating, index) => (
              <div
                key={index}
                className="px-4 py-6 rounded-lg border border-gray-100 max-sm:min-w-[85%] max-sm:snap-center flex flex-col justify-between"
              >
                {/* Review content */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="font-semibold text-darkgreenx text-xl mr-1">
                      {rating.rating}
                    </span>
                    <span className="text-gray-500">/ 5 stars</span>
                  </div>
                  <p className="text-gray-700 mb-4">{rating.review}</p>
                </div>

                <div className="mt-auto">
                  <p className="text-sm text-gray-500 mb-4">{rating.date}</p>
                  <div className="flex items-center">
                    {rating.profile.profilePic ? (
                      <Image
                        src={rating.profile.profilePic}
                        alt={rating.profile.name}
                        width={36}
                        height={36}
                        className="rounded-full mr-3"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-gray-300 text-white flex items-center justify-center mr-3 text-sm font-semibold">
                        {rating.profile.name?.[0]?.toUpperCase() ?? "U"}
                      </div>
                    )}
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {rating.profile.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!showAll && ratings.length > 6 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(true)}
                className="font-medium px-6 py-4 rounded-xl border-2 border-gray-200 hover:text-darkgreenx cursor-pointer hover:bg-darkgreenx/10 transition-colors duration-300 "
              >
                Show all {ratings.length} reviews
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
