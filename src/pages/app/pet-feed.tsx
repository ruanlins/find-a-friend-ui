import { PetFeedCard } from "@/components/pet-feed/pet-feed-card";

export function PetFeed() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-red-100">
      <div></div>
      <div className="text-blue-950">
        <p>
          Encontre <span className="font-bold">324 amigos </span>na sua cidade
        </p>
        <div>
          <PetFeedCard />
        </div>
      </div>
    </div>
  );
}
