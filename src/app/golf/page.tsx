import { ClubDataCarousel } from "@/components/golf/club-distances-chart";
import { RoundsCarousel } from "@/components/golf/rounds-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { playerProfile } from "@/data/golf";

export default function Golf() {
  return (
    <main className="flex flex-col p-8 pt-16  md:p-24 max-w-[600px] mx-auto mb-28">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl">
        Golf &nbsp;&nbsp;⛳️
      </h1>
      <p className="mt-8 text-base sm:text-xl text-muted-foreground tracking-wide">
        {playerProfile.handicap} Handicap &bull; {playerProfile.shotsPlayed}{" "}
        Shots &bull; {playerProfile.totalRounds} Rounds
      </p>
      <Tabs defaultValue="rounds" className="mt-6 w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="rounds">Recent Rounds</TabsTrigger>
          <TabsTrigger value="distances">Club Distances</TabsTrigger>
        </TabsList>
        <TabsContent value="rounds">
          <RoundsCarousel />
        </TabsContent>
        <TabsContent value="distances">
          <ClubDataCarousel />
        </TabsContent>
      </Tabs>
    </main>
  );
}
