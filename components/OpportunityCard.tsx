"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

interface OpportunityCardProps {
  opportunity: {
    id: string;
    name: string;
    location: string;
    mainRole: string;
    typeOfStay: string;
    images: string[];
    skillsRequired: string[];
    aboutExperience: string;
    minDurationWeeks?: number;
    whatYouGet?: {
      roomType?: string;
    };
    whatYouOffer: {
      hoursPerDay: number;
      daysPerWeek: number;
    };
  };
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  const images = opportunity.images.length > 0 ? opportunity.images : ["/placeholder.jpg"];
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Link href={`/opportunities/${opportunity.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer relative">
        {/* Carousel */}
        <div className="relative w-full h-48">
          <Carousel
            setApi={setApi}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            className="w-full h-full"
          >
            <CarouselContent>
              {images.map((imgSrc, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-48">
                    <Image
                      src={imgSrc}
                      alt={`Image ${index + 1}`}
                      fill
                      className="object-cover rounded-t-lg"
                      sizes="100vw"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "bg-white" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Heart Button */}
          <button className="absolute top-2 right-2 p-2 rounded-full z-20 cursor-pointer transition-colors duration-300">
            <Heart className="text-white hover:text-red-500 w-6 h-6 hover:fill-red-500 transition-colors duration-200" />
          </button>

          {/* New Tag */}
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-sm z-10">
            New
          </div>
        </div>

        <div className="p-4">
          <p className="text-gray-600 text-sm mb-2 mt-1 flex items-center gap-1">
            <MapPin className="w-4 h-4 text-green-500" />
            {opportunity.location}
          </p>

          <h3 className="font-semibold text-xl mb-4 text-gray-800">
            Volunteer in {opportunity.location.split(",")[0]} as {opportunity.mainRole}
          </h3>

          <div className="flex flex-wrap gap-2 mb-3 line-clamp-1">
            {opportunity.skillsRequired.slice(0, 2).map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {skill}
              </span>
            ))}
            {opportunity.skillsRequired.length > 2 && (
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                +{opportunity.skillsRequired.length - 2}
              </span>
            )}
          </div>

          <p className="text-gray-500 text-sm mb-2">
            {opportunity.whatYouOffer?.hoursPerDay * opportunity.whatYouOffer?.daysPerWeek}h/Week •{" "}
            {opportunity.minDurationWeeks && `At least ${opportunity.minDurationWeeks} weeks`}
          </p>

          <p className="text-gray-500 text-sm mb-2">{opportunity.whatYouGet?.roomType}</p>
        </div>
      </div>
    </Link>
  );
};

export default OpportunityCard;
