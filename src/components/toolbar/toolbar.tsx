import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme/theme-toggle";

import { ToastButton } from "./toast-button";
import { TooltipLink } from "./tooltip-link";

export function Toolbar() {
  return (
    <div className="flex items-center justify-between rounded-full bg-zinc-800 p-2 max-w-max fixed bottom-6 left-1/2 translate-center space-x-1">
      <TooltipLink content="Home" href="/">
        <Avatar className="h-[30px] w-[30px]">
          <AvatarImage src="/headshot.jpeg" />
          <AvatarFallback>CH</AvatarFallback>
        </Avatar>
      </TooltipLink>

      <ToastButton
        description="I'm working on the messaging feature"
        heading="Check back soon!"
        tooltip="Send me a message"
      >
        <MessageCircleIcon className="h-6 w-6 stroke-1" />
        <span className="sr-only">Send me a message</span>
      </ToastButton>

      <TooltipLink
        content="Check out my GitHub"
        href="https://github.com/cody-hoffman"
        target="_blank"
      >
        <GitHubLogoIcon className="h-5 w-5" />
        <span className="sr-only">Check out my GitHub</span>
      </TooltipLink>

      <TooltipLink
        content="Check out my LinkedIn"
        href="https://www.linkedin.com/in/cody-hoffman-618557121/"
        target="_blank"
      >
        <LinkedInLogoIcon className="h-5 w-5 stroke-1" />
        <span className="sr-only">Check out my LinkedIn</span>
      </TooltipLink>

      <ThemeToggle />
    </div>
  );
}

function MessageCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}
