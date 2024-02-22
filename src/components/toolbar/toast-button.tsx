"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip as TooltipBase,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

interface Props {
  children: React.ReactNode;
  description: string;
  heading: string;
  tooltip: string;
}

export function ToastButton({
  children,
  description,
  heading,
  tooltip,
}: Props) {
  return (
    <TooltipProvider>
      <TooltipBase>
        <TooltipTrigger asChild>
          <Button
            className="text-zinc-100 rounded-full hover:bg-zinc-600 hover:text-zinc-100"
            onClick={() =>
              toast(heading, {
                description,
                action: { label: "Close", onClick: () => console.log("Close") },
              })
            }
            size="icon"
            variant="ghost"
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  );
}
