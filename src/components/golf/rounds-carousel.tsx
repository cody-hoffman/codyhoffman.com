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
import { rounds } from "@/data/golf";
import { formatDate } from "@/lib/dates";

export function RoundsCarousel() {
  return (
    <Carousel className="mt-8 w-full" opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {rounds.map((round, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="flex flex-col sm:flex-row items-center justify-between sm:py-6 pb-6">
                <CardHeader className="max-w-64">
                  <CardTitle className="truncate">{round.courseName}</CardTitle>
                  <CardDescription>
                    {round.noOfHoles} holes &bull; {formatDate(round.startTime)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex aspect-auto items-center p-0 sm:pr-6">
                  <span className="text-3xl font-semibold">
                    {round.noOfShots}&nbsp;
                    <span className="text-muted-foreground">
                      ({getSign(round.overUnder)}
                      {round.overUnder})
                    </span>{" "}
                  </span>
                </CardContent>
              </Card>
            </div>
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
