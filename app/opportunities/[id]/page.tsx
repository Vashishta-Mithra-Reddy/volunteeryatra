import { opportunities } from "@/data/opportunities";
import Image from "next/image";
import Link from "next/link";
import { Share2, Heart, ArrowLeft, MapPin, Home, Hotel, User, Users, Clock, Calendar, Bed, Utensils, Bus, Gift, Coffee } from "lucide-react";

export default async function OpportunityDetailPage({
  params,
}: { 
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const opportunity = opportunities.find((opp) => opp.id === id);

  if (!opportunity) {
    return <div className="text-center py-10 text-xl">Opportunity not found.</div>;
  }

  return (
    <div className="container mx-auto pb-28">
      {/* Header with Back, Title, Share, and Heart */}
      <div className="flex items-center justify-between mb-6 border-b-2 border-gray-200 px-16 py-5">
        <Link href="/opportunities" className="flex items-center text-gray-600 hover:text-yellow-500">
          <ArrowLeft className="w-7 h-7 mr-1" />
        </Link>
        <h1 className="text-2xl font-semibold ml-3 text-left flex-grow">{opportunity.name}</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-green-600 cursor-pointer">
            <Share2 className="w-7 h-7" />
          </button>
          <button className="text-gray-600 hover:text-red-500 cursor-pointer">
            <Heart className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8 px-4 lg:px-16">
        {/* Left: Main Image */}
        <div className="w-full lg:w-1/2 h-[400px] relative overflow-hidden shadow-md rounded-l-3xl">
          <Image
            src={opportunity.images[0]}
            alt={`${opportunity.name} main image`}
            layout="fill"
            objectFit="cover"
            className="rounded-tl-lg rounded-bl-lg"
          />
        </div>

        {/* Right: Grid of 4 Images + Show More Overlay */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
          {opportunity.images.slice(1, 5).map((image, index) => {
            // Conditional rounding
            const roundingClass =
              index === 1 ? 'rounded-tr-3xl' : index === 3 ? 'rounded-br-3xl' : '';

            return (
              <div
                key={index}
                className={`relative w-full h-48 overflow-hidden shadow-md ${roundingClass}`}
              >
                <Image
                  src={image}
                  alt={`${opportunity.name} image ${index + 2}`}
                  layout="fill"
                  objectFit="cover"
                  className={roundingClass}
                />
              </div>
            );
          })}

          {/* Show More Button as 5th Grid Item */}
          {/* <div className="relative w-full h-48 bg-gray-800 bg-opacity-50 flex items-center justify-center shadow-md rounded-br-lg">
            <button className="px-4 py-2 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-200 z-10">
              Show More
            </button>
          </div> */}
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-16">
        <div className="lg:col-span-2">
          {/* Duration */}
          <div className="flex items-center gap-8 mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Stay at least</h2>
              <span className="bg-yellowx text-darkgreenx text-md font-medium px-12 py-2 rounded-sm text-custom-dark-green">
                {opportunity.minDurationWeeks} Weeks
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Stay up to</h2>
              <span className="bg-yellowx text-darkgreenx text-md font-medium px-12 py-2 rounded-sm text-custom-dark-green">
                {opportunity.maxDurationWeeks} Weeks
              </span>
            </div>
          </div>

          {/* Skills Required */}
          <h2 className="text-2xl font-semibold mb-4 mt-6">Skills Required</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {opportunity.skillsRequired.map((skill, index) => (
              <span
                key={index}
                className="bg-yellowx text-darkgreenx text-md font-medium px-12 py-2 rounded-sm text-custom-dark-green"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Description */}
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 mb-6">{opportunity.description}</p>

{/* What You Offer */}
<h2 className="text-2xl font-semibold mb-6">What You Offer</h2>
<div className="grid grid-cols-2 sm:grid-cols-6 gap-6 mb-10">
  <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-6">
    <Clock className="w-12 h-12 text-blue-600 mb-3" />
    <span className="font-semibold text-lg text-gray-800">Time per day</span>
    <span className="text-gray-600">{opportunity.whatYouOffer.hoursPerDay} hours</span>
  </div>

  <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-6">
    <Calendar className="w-12 h-12 text-blue-600 mb-3" />
    <span className="font-semibold text-lg text-gray-800">Days per week</span>
    <span className="text-gray-600">{opportunity.whatYouOffer.daysPerWeek} days</span>
  </div>
</div>

{/* What You Get */}
<h2 className="text-2xl font-semibold mb-6">What You Get</h2>
<div className="grid grid-cols-2 sm:grid-cols-6 gap-6">
  <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-6">
    <Bed className="w-12 h-12 text-green-600 mb-3" />
    <span className="font-semibold text-lg text-gray-800">Room Type</span>
    <span className="text-gray-600">{opportunity.whatYouGet.roomType}</span>
  </div>

  <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-6">
    <Utensils className="w-12 h-12 text-green-600 mb-3" />
    <span className="font-semibold text-lg text-gray-800">Meals</span>
    <span className="text-gray-600">{opportunity.whatYouGet.meals}</span>
  </div>

  {opportunity.whatYouGet.transport && (
    <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-6">
      <Bus className="w-12 h-12 text-green-600 mb-3" />
      <span className="font-semibold text-lg text-gray-800">Transport</span>
      <span className="text-gray-600">{opportunity.whatYouGet.transport}</span>
    </div>
  )}

  {opportunity.whatYouGet.extras?.map((extra, index) => (
    <div key={index} className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-6">
      <Gift className="w-12 h-12 text-green-600 mb-3" />
      <span className="font-semibold text-lg text-gray-800">Extra</span>
      <span className="text-gray-600">{extra}</span>
    </div>
  ))}

  <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-6">
    <Coffee className="w-12 h-12 text-green-600 mb-3" />
    <span className="font-semibold text-lg text-gray-800">Days Off</span>
    <span className="text-gray-600">{opportunity.whatYouGet.daysOff} per week</span>
  </div>
</div>          

          {/* About the Experience */}
          <h2 className="text-2xl font-semibold mb-4 mt-8">About the Experience</h2>
          <p className="text-gray-700 mb-6">{opportunity.aboutExperience}</p>

          
          <hr className="border-2 border-gray-200 my-8"></hr>
          {/* Rating Section */}
          {/* <h2 className="text-2xl font-semibold mb-4">Reviews ({opportunity.host.totalReviews})</h2> */}
          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
          <div className="mb-6">
            {opportunity.ratings && opportunity.ratings.length > 0 ? (
              opportunity.ratings.map((rating, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    {rating.profile.profilePic && (
                      <Image
                        src={rating.profile.profilePic}
                        alt={rating.profile.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-800">{rating.profile.name} from {rating.profile.country}</p>
                      <p className="text-sm text-gray-500">{rating.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="font-semibold text-yellow-500 text-xl mr-1">{rating.rating}</span>
                    <span className="text-gray-500">/ 5 stars</span>
                  </div>
                  <p className="text-gray-700">{rating.review}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
          <hr className="border-2 border-gray-200 mb-4 mt-12"></hr>
          

          {/* Host Data Section (Moved to bottom) */}
          <div className="w-full">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Meet Your Host</h2>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl font-bold mr-4">
                  {opportunity.host.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-xl">{opportunity.host.name}</h3>
                  <p className="text-gray-600">{opportunity.host.totalReviews} reviews | {opportunity.host.rating} / 5 rating</p>
                  <p className="text-gray-600">{opportunity.host.yearsHosting} years hosting</p>
                </div>
              </div>
              <p className="text-gray-700">{opportunity.host.about}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Sticky Footer */}
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-6 px-20 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <span className="flex items-center text-gray-700 text-lg font-semibold">
            <MapPin className="w-6 h-6 mr-1" /> {opportunity.location}
          </span>
          <span className="flex items-center text-gray-700">
            {(() => {
              let StayIcon;
              let bgColorClass;
              switch (opportunity.typeOfStay.toLowerCase()) {
                case 'homestay':
                  StayIcon = Home;
                  bgColorClass = 'bg-blue-100 text-blue-800';
                  break;
                case 'hotel':
                  StayIcon = Hotel;
                  bgColorClass = 'bg-green-100 text-green-800';
                  break;
                case 'hostel':
                  StayIcon = Bed;
                  bgColorClass = 'bg-purple-100 text-purple-800';
                  break;
                default:
                  StayIcon = null;
                  bgColorClass = 'bg-gray-100 text-gray-800';
              }
              return (
                <span className={`flex items-center px-4 py-2 rounded-full text-lg font-semibold ${bgColorClass}`}>
                  {StayIcon && <StayIcon className="w-5 h-5 mr-2" />}
                  {opportunity.typeOfStay}
                </span>
              );  
            })()}
          </span>
          <span className="text-gray-700 text-lg font-semibold flex items-center">
            <Users className="w-5 h-5 mr-1" />{opportunity.maxVolunteers} People Can Volunteer Together
          </span>
        </div>
        <button className="bg-darkgreenx hover:bg-green-900 cursor text-white text-md font-medium py-3 px-8 rounded-full transition-colors">
          Apply Now
        </button>
      </div>
    </div>
    </div>
  );
}
