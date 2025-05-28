import { opportunities } from "@/data/opportunities";
import Image from "next/image";
import Link from "next/link";
import Reviews from "@/components/Reviews";
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
    <div className="container mx-auto pb-20 md:pb-28">
      {/* Headerx*/}
      <div className="flex items-center justify-between mb-6 border-b-2 border-gray-200 px-4 sm:px-8 md:px-16 py-5">
        <Link href="/opportunities" className="flex items-center text-gray-600 hover:text-yellow-500">
          <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 mr-1" />
        </Link>
        <h1 className="text-xl sm:text-2xl font-semibold ml-3 text-left flex-grow">Volunteer in {opportunity.location.split(",")[0]}</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-green-600 cursor-pointer">
            <Share2 className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
          <button className="text-gray-600 hover:text-red-500 cursor-pointer">
            <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>
      </div>

      {/* Imagesx */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8 px-4 sm:px-8 md:px-16">
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] relative overflow-hidden shadow-md rounded-lg lg:rounded-l-3xl lg:rounded-r-none">
          <Image
            src={opportunity.images[0]}
            alt={`${opportunity.name} main image`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg lg:rounded-l-3xl lg:rounded-r-none"
          />
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
          {opportunity.images.slice(1, 5).map((image, index) => {
            const roundingClass =
              index === 1 ? 'lg:rounded-tr-3xl' : index === 3 ? 'lg:rounded-br-3xl' : '';

            return (
              <div
                key={index}
                className={`relative w-full h-36 sm:h-48 overflow-hidden shadow-md rounded-lg lg:rounded-none ${roundingClass}`}
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
        </div>
      </div>

      {/* Mobile Location Info - Only visible on mobile */}
      <div className="lg:hidden px-6 pt-2 sm:px-8 md:px-16 mb-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-around">
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
                  <span className={`flex items-center px-3 py-2 rounded-full text-base font-semibold ${bgColorClass}`}>
                    {StayIcon && <StayIcon className="w-4 h-4 mr-2" />}
                    {opportunity.typeOfStay}
                  </span>
                );  
              })()}
            </span>
            <span className="flex items-center text-green-800 text-base font-semibold bg-green-100 px-3 py-2 rounded-full">
              <MapPin className="w-5 h-5 mr-1" /> {opportunity.location}
            </span>
          </div>
          <span className="text-gray-700 text-base font-semibold flex w-full items-center justify-center py-2 rounded-full">
            <Users className="w-5 h-5 mr-1" />{opportunity.maxVolunteers} People Can Volunteer Together
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 md:px-16">
        <div className="lg:col-span-2">
          {/* Durationx */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-6">
            <div className="w-full sm:w-auto">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Stay at least</h2>
              <span className="bg-yellowx text-darkgreenx text-lg font-medium px-8 sm:px-12 py-2 rounded-sm text-custom-dark-green inline-block w-full sm:w-auto text-center">
                {opportunity.minDurationWeeks} Weeks
              </span>
            </div>
            <div className="w-full sm:w-auto">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Stay up to</h2>
              <span className="bg-yellowx text-darkgreenx text-lg font-medium px-8 sm:px-12 py-2 rounded-sm text-custom-dark-green inline-block w-full sm:w-auto text-center">
                {opportunity.maxDurationWeeks} Weeks
              </span>
            </div>
          </div>

          {/* Skillsx */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-6">Skills Required</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {opportunity.skillsRequired.map((skill, index) => (
              <span
                key={index}
                className="bg-yellowx text-darkgreenx text-sm sm:text-lg font-medium px-6 sm:px-12 py-2 rounded-sm text-custom-dark-green"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Descriptionx */}
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 mb-6">{opportunity.description}</p>

          {/* What You Offerx */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">What You Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 mb-10">
            <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-4 sm:p-6">
              <Clock className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mb-3" />
              <span className="font-semibold text-base sm:text-lg text-gray-800">Time per day</span>
              <span className="text-gray-600">{opportunity.whatYouOffer.hoursPerDay} hours</span>
            </div>

            <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-4 sm:p-6">
              <Calendar className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mb-3" />
              <span className="font-semibold text-base sm:text-lg text-gray-800">Days per week</span>
              <span className="text-gray-600">{opportunity.whatYouOffer.daysPerWeek} days</span>
            </div>
          </div>

          {/* What You Getx */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">What You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
            <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-4 sm:p-6">
              <Bed className="w-8 h-8 sm:w-12 sm:h-12 text-green-600 mb-3" />
              <span className="font-semibold text-base sm:text-lg text-gray-800">Room Type</span>
              <span className="text-gray-600">{opportunity.whatYouGet.roomType}</span>
            </div>

            <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-4 sm:p-6">
              <Utensils className="w-8 h-8 sm:w-12 sm:h-12 text-green-600 mb-3" />
              <span className="font-semibold text-base sm:text-lg text-gray-800">Meals</span>
              <span className="text-gray-600">{opportunity.whatYouGet.meals}</span>
            </div>

            {opportunity.whatYouGet.transport && (
              <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-4 sm:p-6">
                <Bus className="w-8 h-8 sm:w-12 sm:h-12 text-green-600 mb-3" />
                <span className="font-semibold text-base sm:text-lg text-gray-800">Transport</span>
                <span className="text-gray-600">{opportunity.whatYouGet.transport}</span>
              </div>
            )}

            {opportunity.whatYouGet.extras?.map((extra, index) => (
              <div key={index} className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-4 sm:p-6">
                <Gift className="w-8 h-8 sm:w-12 sm:h-12 text-green-600 mb-3" />
                <span className="font-semibold text-base sm:text-lg text-gray-800">Extra</span>
                <span className="text-gray-600">{extra}</span>
              </div>
            ))}

            <div className="flex flex-col items-center bg-white border-gray-200 border-2 rounded-xl p-4 sm:p-6">
              <Coffee className="w-8 h-8 sm:w-12 sm:h-12 text-green-600 mb-3" />
              <span className="font-semibold text-base sm:text-lg text-gray-800">Days Off</span>
              <span className="text-gray-600">{opportunity.whatYouGet.daysOff} per week</span>
            </div>
          </div>          

          {/* About the Experiencex */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 mt-8">About the Experience</h2>
          <p className="text-gray-700 mb-6">{opportunity.aboutExperience}</p>

          
          <hr className="border-2 border-gray-200 my-8"></hr>
          {/* Ratingx}
          {/* <h2 className="text-2xl font-semibold mb-4">Reviews ({opportunity.host.totalReviews})</h2> */}
          <Reviews ratings={opportunity.ratings} />
          <hr className="border-2 border-gray-200 mb-4 mt-12"></hr>
          

           {/* Hostx */}
          <div className="w-full">
            <div className="bg-white p-4 sm:p-6 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6">Meet Your Host</h2>

              <div className="flex flex-col md:flex-row gap-6">
              
                <div className="bg-gray-50 rounded-2xl border border-gray-200 w-full md:w-1/3 p-4 sm:p-6 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                  
                  {/* Avatar and Name */}
                  <div className="flex flex-col items-center md:items-center md:w-1/2 mb-4 md:mb-0 h-full justify-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xl font-bold mb-4 sm:mb-6">
                      {opportunity.host.name.charAt(0)}
                    </div>
                    <h3 className="font-semibold text-lg sm:text-xl">{opportunity.host.name}</h3>
                  </div>

                  {/* Stats */}
                  <div className="w-full h-full md:w-1/2 md:pl-4 flex flex-col justify-center text-center">
                    <div className="border-b border-gray-200 pb-2 mb-2">
                      <p className="text-lg sm:text-xl text-darkgreenx font-semibold">{opportunity.host.totalReviews} <span className="text-sm font-normal"><br></br> reviews</span></p>
                    </div>
                    <div className="border-b border-gray-200 pb-2 mb-2">
                      <p className="text-lg sm:text-xl text-darkgreenx font-semibold">{opportunity.host.rating}<span className="text-sm font-normal"><br></br>rating</span></p>
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl text-darkgreenx font-semibold">{opportunity.host.yearsHosting}<span className="text-sm font-normal"><br></br>years hosting</span></p>
                    </div>
                  </div>
                </div>

                {/* Hosts About Section */}
                <div className="w-full md:w-2/3 flex items-center pl-0 md:pl-8">
                  <div className="space-y-4">
                    {opportunity.host.about.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Footerx */}
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 sm:py-6 px-4 sm:px-20 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="hidden md:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-12">
          <span className="flex items-center text-gray-700 text-base sm:text-lg font-semibold">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-1" /> {opportunity.location}
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
                <span className={`flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full text-base sm:text-lg font-semibold ${bgColorClass}`}>
                  {StayIcon && <StayIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />}
                  {opportunity.typeOfStay}
                </span>
              );  
            })()}
          </span>
          <span className="text-gray-700 text-base sm:text-lg font-semibold flex items-center">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-1" />{opportunity.maxVolunteers} People Can Volunteer Together
          </span>
        </div>
        <button className="w-full sm:w-auto bg-darkgreenx hover:bg-green-900 cursor text-white text-md font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-colors">
          Apply Now
        </button>
      </div>
    </div>
    
    </div>
  );
}
