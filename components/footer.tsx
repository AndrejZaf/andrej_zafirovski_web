import { Keyboard } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Footer = () => {
  return (
    <footer className="text-muted-foreground py-5 text-center">
      Andrej Zafirovski © {new Date().getFullYear()}
      <div className="flex items-center gap-x-1 justify-center">
        <div className="text-xs">Made with </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Keyboard size={18} />
          </TooltipTrigger>
          <TooltipContent>Keyboard</TooltipContent>
        </Tooltip>
      </div>
    </footer>
  );
};

export default Footer;
