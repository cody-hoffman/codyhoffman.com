import { clubs } from "@/data/golf";

import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ClubDataCarousel() {
  return (
    <Carousel className="mt-8 w-full" opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {clubs.paired.map((club, index) => (
          <CarouselItem key={index}>
            <Card className="flex flex-col sm:flex-row items-center justify-between sm:py-6 pb-6">
              <CardHeader className="max-w-64">
                <CardTitle className="truncate">{club.clubType}</CardTitle>
                <CardDescription>
                  {club.clubMake} {club.clubModel}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex aspect-auto items-center p-0 sm:pr-6">
                <span className="text-3xl font-semibold">
                  {Math.ceil(
                    club.clubType === "3 Wood"
                      ? 256
                      : club.smartDistance.raw ?? 0,
                  )}
                  &nbsp;
                  <span className="text-muted-foreground">y</span>
                </span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="top-[128%] left-1/3" />
      <CarouselNext className="top-[128%] right-1/3" />
    </Carousel>
  );
}

const getSign = (overUnder: number) => {
  if (overUnder > 0) {
    return "+";
  } else if (overUnder < 0) {
    return "";
  } else {
    return "";
  }
};
