import { PetFeedCard } from "@/components/pet-feed/pet-feed-card";
import { PetFeedFilter } from "@/components/pet-feed/pet-feed-filter";

export function PetFeed() {
  return (
    <div className="w-full bg-red-100">
      <div className="fixed h-full w-[390px] space-y-20 bg-red-500 p-14">
        <PetFeedFilter />
      </div>
      <div className="mb-7 ml-[440px] mt-20">
        <div>
          <p className="mb-5 text-blue-950">
            Encontre <span className="font-bold">NUMBER amigos</span> perto de
            você
          </p>
        </div>
        <ul className="grid grid-cols-[repeat(4,270px)] justify-items-center gap-8">
          {Array.from({ length: 20 }, (_, i) => (
            <PetFeedCard key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
