"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip as TooltipBase,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MessagingDialog } from "../messaging/dialog";

interface Props {
  children: React.ReactNode;
  description: string;
  heading: string;
  tooltip: string;
}

export function MessageTooltipButton({ children, tooltip }: Props) {
  return (
    <TooltipProvider>
      <TooltipBase>
        <TooltipTrigger asChild>
          <MessagingDialog>
            <Button
              className="text-zinc-100 rounded-full hover:bg-zinc-600 hover:text-zinc-100"
              size="icon"
              variant="ghost"
            >
              {children}
            </Button>
          </MessagingDialog>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  );
}
