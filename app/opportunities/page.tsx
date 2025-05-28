"use client";

import { opportunities } from "@/data/opportunities";
import OpportunityCard from "@/components/OpportunityCard";
import { Input } from "@/components/ui/input";
import { CalendarIcon, SearchIcon, HomeIcon, HotelIcon, Building2Icon } from "lucide-react";
import React from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MobileNav from "@/components/MobileNav";

export default function OpportunitiesPage() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 20),
    to: addDays(new Date(2025, 5, 20), 20),
  });

  const [locationQuery, setLocationQuery] = React.useState("");
  const [skillsQuery, setSkillsQuery] = React.useState("");
  const [mobileQuery, setMobileQuery] = React.useState("");

  const [selectedStayTypes, setSelectedStayTypes] = React.useState<string[]>([]);

  const toggleStayType = (type: string) => {
    setSelectedStayTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const searchIn = `${opportunity.location} ${opportunity.skillsRequired.join(" ")}`.toLowerCase();

    const matchesMobile = !mobileQuery || searchIn.includes(mobileQuery.toLowerCase());
    const matchesLocation = opportunity.location
      .toLowerCase()
      .includes(locationQuery.toLowerCase());
    const matchesSkills = opportunity.skillsRequired
      .join(" ")
      .toLowerCase()
      .includes(skillsQuery.toLowerCase());
    const matchesStayType =
      selectedStayTypes.length === 0 || selectedStayTypes.includes(opportunity.typeOfStay.toLowerCase());

    return matchesMobile && matchesLocation && matchesSkills && matchesStayType;
  });

  return (
    <div className="min-h-screen">
      <div className="w-full px-6 md:px-24 py-8 pb-24 md:pb-8">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          {/* Mobile view */}
          <div className="w-full md:hidden">
            <Input
              type="text"
              placeholder="Start your search"
              className="w-full rounded-full font-semibold px-6 py-8 shadow-sm text-lg bg-white text-center text-darkgreenx"
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
            />
          </div>

          {/* Desktop view */}
          <div className="w-3xl hidden md:flex items-center border border-gray-300 rounded-full shadow-sm bg-white px-3 py-3 space-x-2">
            <Input
              type="text"
              placeholder="Where to?"
              className="flex-1 shadow-none focus-visible:ring-0 border-0 border-r-1 rounded-none border-gray-200"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Skills"
              className="flex-1 shadow-none focus-visible:ring-0 border-0 border-r-1 rounded-none border-gray-200"
              value={skillsQuery}
              onChange={(e) => setSkillsQuery(e.target.value)}
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[300px] justify-start text-left font-normal border-0 shadow-none cursor-pointer",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>

            <Button
              type="submit"
              className="bg-darkgreenx cursor-pointer hover:bg-green-700 rounded-full"
            >
              <SearchIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        <hr className="mt-8 mb-2" />

        {/* Stay Type Filter - Redesigned */}
        <div className="flex gap-6 justify-center md:justify-start mb-6">
          {[
            { type: "hostel", icon: <Building2Icon className="h-6 w-6" /> },
            { type: "hotel", icon: <HotelIcon className="h-6 w-6" /> },
            { type: "homestay", icon: <HomeIcon className="h-6 w-6" /> },
          ].map(({ type, icon }) => {
            const isActive = selectedStayTypes.includes(type);
            return (
              <div
                key={type}
                onClick={() => toggleStayType(type)}
                className={`flex flex-col items-center justify-center cursor-pointer px-4 py-2 transition-all ${
                  isActive ? "border-b-2 border-gray-500" : "border-b-2 border-transparent"
                }`}
              >
                <div className={`${isActive ? "text-darkgreenx" : "text-gray-600"}`}>
                  {icon}
                </div>
                <span className="text-sm capitalize mt-1">{type}</span>
              </div>
            );
          })}
        </div>

        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
