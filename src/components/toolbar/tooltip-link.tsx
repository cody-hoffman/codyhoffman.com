import { Button } from "@/components/ui/button";
import {
  Tooltip as TooltipBase,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  content: string;
  href: string;
  target?: string;
}

export function TooltipLink({ children, content, href, target }: Props) {
  return (
    <TooltipProvider>
      <TooltipBase>
        <TooltipTrigger asChild>
          <Link href={href} target={target}>
            <Button
              className="text-zinc-100 rounded-full hover:bg-zinc-600 hover:text-zinc-100"
              size="icon"
              variant="ghost"
            >
              {children}
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  );
}
