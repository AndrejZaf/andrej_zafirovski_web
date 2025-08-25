import { GithubIcon } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-3xl font-semibold px-4 border-l border-r">AZ</div>
      <div className="items-center flex px-2 gap-x-2 border-x">
        <Button size="icon" className="rounded-full">
          <GithubIcon />
        </Button>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
