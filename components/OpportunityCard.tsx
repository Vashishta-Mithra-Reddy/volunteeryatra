import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";

interface OpportunityCardProps {
  opportunity: {
    id: string;
    name: string;
    location: string;
    typeOfStay: string;
    images: string[];
    skillsRequired: string[];
    aboutExperience: string;
    minDurationWeeks?: number;
    whatYouGet?: {
      roomType?: string;
    };
  };
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  return (
    <Link href={`/opportunities/${opportunity.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer relative">
        <div className="relative w-full h-48">
          <Image
            src={opportunity.images[0] || "/placeholder.jpg"}
            alt={opportunity.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />

          {/* Heart Button */}
          <button className="absolute top-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full z-10">
            <Heart className="text-red-500 w-4 h-4 fill-red-500" />
          </button>

          {/* New Tag */}
          <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full z-10">
            New
          </div>
        </div>

        <div className="p-4">
          {/* Location with Map Pin */}
          <p className="text-gray-600 text-sm mb-1 flex items-center gap-1">
            <MapPin className="w-4 h-4 text-green-500" /> {opportunity.location}
          </p>

          <h3 className="font-bold text-xl mb-2 text-gray-800">{opportunity.name}</h3>


          {/* Skills */}
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
          
          {/* Additional Info */}
          <p className="text-gray-500 text-sm mb-2">
            {opportunity.minDurationWeeks && `At least ${opportunity.minDurationWeeks} weeks`} •{" "}
            {opportunity.whatYouGet?.roomType}
          </p>

          {/* About */}
          {/* <p className="text-gray-700 text-base line-clamp-3">{opportunity.aboutExperience}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default OpportunityCard;
