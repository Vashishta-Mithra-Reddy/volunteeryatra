import { opportunities } from "@/data/opportunities";
import OpportunityCard from "@/components/OpportunityCard";

export default function OpportunitiesPage() {
  return (
    <div className="flex justify-center px-4 py-12">
      <div className="w-full px-12 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </div>
    </div>
  );
}
