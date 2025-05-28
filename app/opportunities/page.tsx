"use client";

import { opportunities } from "@/data/opportunities";
import OpportunityCard from "@/components/OpportunityCard";
import { Input } from "@/components/ui/input"; 
import { CalendarIcon, SearchIcon } from "lucide-react"; 
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

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full px-12 md:px-20 py-8 pb-24 md:pb-8">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          {/* Mobile view: Simple search bar */}
          <div className="w-full md:hidden">
            <Input
              type="text"
              placeholder="Start your search"
              className="w-full rounded-full  font-semibold px-6 py-8 shadow-sm text-lg bg-white text-center text-darkgreenx"
            />
          </div>

          {/* Desktop view: Detailed search bar */}
          <div className="w-2/3 hidden md:flex items-center border border-gray-300 rounded-full shadow-sm bg-white px-3 py-3 space-x-2">
            {/* Where to (location) */}
            <Input
              type="text"
              placeholder="Where to? (Location)"
              className="flex-1 shadow-none focus-visible:ring-0 border-0 border-r-1 rounded-none border-gray-200"
            />

            {/* Skills */}
            <Input
              type="text"
              placeholder="Skills"
              className="flex-1 shadow-none focus-visible:ring-0 border-0 border-r-1 rounded-none border-gray-200"
            />

            {/* Date/Time Period */}
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

            {/* Search Button */}
            <Button
              type="submit"
              className="bg-darkgreenx cursor-pointer hover:bg-green-700 rounded-full"
            >
              <SearchIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>

        {/* <h1 className="text-4xl font-bold text-gray-800 mb-8">Explore Opportunities</h1> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
