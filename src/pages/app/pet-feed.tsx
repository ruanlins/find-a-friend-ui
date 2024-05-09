import { PetFeedCard } from "@/components/pet-feed/pet-feed-card";

export function PetFeed() {
  return (
    <div className="grid w-full grid-cols-[390px_auto] gap-32 bg-red-100">
      <div className="bg-red-500"></div>
      <div>
        <ul className="grid grid-cols-[repeat(3,270px)] justify-items-center gap-8">
          {Array.from({ length: 20 }, (_, i) => (
            <PetFeedCard key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
